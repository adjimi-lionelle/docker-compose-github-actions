# 1. Assets Webpack Encore
FROM node:20-alpine AS assets
WORKDIR /app
COPY package*.json webpack.config.js ./
RUN npm ci
COPY assets ./assets
RUN npm run build

# 2. Dépendances PHP
FROM composer:2 AS vendor
WORKDIR /app
COPY composer.json composer.lock symfony.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --prefer-dist --ignore-platform-reqs

# 3. Image finale
FROM php:8.3-apache
RUN apt-get update && apt-get install -y --no-install-recommends \
      libicu-dev libzip-dev libpng-dev libjpeg-dev libfreetype6-dev libwebp-dev \
 && docker-php-ext-configure gd --with-jpeg --with-freetype --with-webp \
 && docker-php-ext-install -j"$(nproc)" intl zip gd pdo_mysql opcache \
 && a2enmod rewrite headers \
 && rm -rf /var/lib/apt/lists/*
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' \
      /etc/apache2/sites-available/*.conf /etc/apache2/apache2.conf
RUN printf '<Directory /var/www/html/public>\n\tAllowOverride None\n\tRequire all granted\n\tFallbackResource /index.php\n\tSetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1\n</Directory>\n' \
      > /etc/apache2/conf-available/symfony.conf \
 && a2enconf symfony
WORKDIR /var/www/html
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
COPY --from=vendor /app/vendor ./vendor
COPY . .
COPY --from=assets /app/public/build ./public/build
ENV APP_ENV=prod
RUN composer dump-autoload --no-dev --optimize --classmap-authoritative \
&& APP_SECRET=build php bin/console cache:warmup \
 && php bin/console assets:install public \
 && mkdir -p public/uploads var \
 && chown -R www-data:www-data var public/uploads