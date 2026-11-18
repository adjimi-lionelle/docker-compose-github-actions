import React from 'react';
import { Link } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

interface ContenuMenuProps {
    currentId: number;
    items: Array<{ id: number; nom: string; link: string}>; // Tableau générique avec des objets contenant `id` et `nom`
}

const ContenuPage: React.FC<ContenuMenuProps> = ({ currentId, items }) => {
    return (
        <ul className="department-menu p-component p-menu-list">
            {items.map((item, index) => {
                if (item.id === 0) {
                    return (
                        <li key={`special-${index}`} className="p-menuitem special-item">
                            <span className="special-text">{item.nom}</span>
                        </li>
                    );
                } else {
                    return (
                        <li key={`item-${item.id}`} className={`p-menuitem ${Number(currentId) === item.id ? 'active-department' : ''}`}>
                            <Link
                                to={`${item.link}`}
                                className={`p-menuitem-link ${currentId === item.id ? 'active-department' : ''}`}
                            >
                                <span className="p-menuitem-text">{item.nom}</span>
                            </Link>
                        </li>
                    );
                }
            })}
        </ul>
    );
};

export default ContenuPage;