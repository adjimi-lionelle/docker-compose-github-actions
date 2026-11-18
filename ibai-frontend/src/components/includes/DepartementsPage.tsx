import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { UnitePedagogique } from '../../interfaces/UnitePedagogiqueInterface';
import { UnitePedagogiqueService } from '../../services/UnitePedagogiqueService';

interface DepartementsMenuProps {
    currentId: number;
}

const DepartementsPage: React.FC<DepartementsMenuProps> = ({ currentId }) => {
    const [unitePedagogiques, setUnitePedagogiques] = useState<UnitePedagogique[]>([]);

    useEffect(() => {
        fetchUnitePedagogiques();
    }, []);

    const fetchUnitePedagogiques = async () => {
        const result = await UnitePedagogiqueService.getAllUnitesPedagogiques();
        setUnitePedagogiques(result.data);
    };

    return (
        <ul className="department-menu p-component p-menu-list">
            {unitePedagogiques.map((dept) => (
                <li key={dept.id} className={`p-menuitem ${Number(currentId) === dept.id ? 'active-department' : ''}`}>
                    <Link
                        to={`/unite-pedagogique/${dept.id}/${dept.nom}`}
                        className={`p-menuitem-link ${currentId === dept.id ? 'active-department' : ''}`}
                    >
                        <span className="p-menuitem-text">{dept.nom}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default DepartementsPage;
