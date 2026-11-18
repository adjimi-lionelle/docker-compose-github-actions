import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { UnitePedagogique } from '../../interfaces/UnitePedagogiqueInterface';
import { UnitePedagogiqueService } from '../../services/UnitePedagogiqueService';

interface FormationsMenuProps {
    currentIdDepartement: number | undefined;
    currentIdFormation: number;
}

const FormationsPage: React.FC<FormationsMenuProps> = ({ currentIdDepartement, currentIdFormation }) => {
    const [unitePedagogique, setUnitePedagogique] = useState<UnitePedagogique>();

    useEffect(() => {
            fetchUnitePedagogiques();
        }, []);
    
        const fetchUnitePedagogiques = async () => {
            if (currentIdDepartement) {
                const result = await UnitePedagogiqueService.getUnitePedagogique(currentIdDepartement);
                setUnitePedagogique(result);
            }
        };

    return (
        <>
        <ul className="department-menu p-component p-menu-list">
                <li key={unitePedagogique?.id} className='p-menuitem active-department-full'>
                    <Link
                        to={`/unite-pedagogique/${unitePedagogique?.id}/${unitePedagogique?.nom}`}
                        className='p-menuitem-link active-department-full' >
                        <span className="p-menuitem-text">{unitePedagogique?.nom}</span>
                    </Link>
                </li>
        </ul>
        <h4 className='mt-3 mb-1'>LISTE DES FORMATIONS</h4>
        <ul className="department-menu p-component p-menu-list">
            {unitePedagogique?.formations.map((form) => (
                <li key={form.id} className={`p-menuitem ${Number(currentIdFormation) === form.id ? 'active-department' : ''}`}>
                    <Link
                        to={`/formation/${form.id}/${form.nom}`}
                        className={`p-menuitem-link ${currentIdFormation === form.id ? 'active-department' : ''}`}
                    >
                        <span className="p-menuitem-text">{form.nom}</span>
                    </Link>
                </li>
            ))}
        </ul>
        </>
    );
};

export default FormationsPage;
