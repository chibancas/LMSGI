import path from "path";
import { Contacto, Emple, Inicio, Productos } from "../Pages/barril";

type CHIBANCAS = () => JSX.Element;
//CHBANCAS ES UNA VARIABLE QEU PUEDE TENER CUALQUIER NOMBRE

interface Iruta {
    component: CHIBANCAS;
    path: string;
    name: string;
    children?: Iruta[]
}

export const Rutas: Iruta[] = [
    {
        component: Inicio,
        path: '/',
        name: 'Inicio'
    },
    {
        component: Productos,
        path: 'productos',
        name: 'Productos'
    },
    {
        component: Emple,
        path: 'empleados',
        name: 'Empleados'
    },
    {
        component: Contacto,
        path: 'contacto',
        name: 'Contacto'
    }
]