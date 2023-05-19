import path from "path";
import { Contacto, Emple, Inicio, ProductosPage } from "../Pages";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';


type CHIBANCAS = () => JSX.Element;
//CHBANCAS ES UNA VARIABLE QEU PUEDE TENER CUALQUIER NOMBRE

interface Iruta {
    component: CHIBANCAS;
    path: string;
    name: string;
    icon?: CHIBANCAS;
    children?: Iruta[]
}

export const Rutas: Iruta[] = [
    {
        component: Inicio,
        path: '/',
        name: 'Inicio',
        // icon?: <FontAwesomeIcon icon="fa-duotone fa-house" beatFade/>
    },
    {
        component: ProductosPage,
        path: 'newproduct',
        name: 'Productos',
        // icon?: <FontAwesomeIcon icon="fa-duotone fa-house" beatFade/>

    },
    {
        component: Emple,
        path: 'empleados',
        name: 'Empleados',
        // icon?: <FontAwesomeIcon icon="fa-duotone fa-house" beatFade/>

    },
    {
        component: Contacto,
        path: 'contacto',
        name: 'Contacto',
        // icon?: <FontAwesomeIcon icon="fa-duotone fa-house" beatFade/>

    }
]