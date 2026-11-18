FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG VITE_API_BASE_URL
ARG VITE_API_BASE_URL_API
ARG VITE_API_TOKEN
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL \
    VITE_API_BASE_URL_API=$VITE_API_BASE_URL_API
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html