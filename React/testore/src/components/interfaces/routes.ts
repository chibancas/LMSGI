import { ReactNode } from "react";
import { BackEnd, Contacto, Emple, Inicio, Login, ProductosPage } from "../Pages";


type CHIBANCAS = () => JSX.Element;
//CHBANCAS ES UNA VARIABLE QEU PUEDE TENER CUALQUIER NOMBRE

interface Iruta {
    component: CHIBANCAS;
    path: string;
    name?: string;
    iden?:string;
    children?: Iruta[]
}

export const Rutas: Iruta[] = [
    {
        component: Inicio,
        path: '/',
        name: 'Inicio',
    },
    {
        component: ProductosPage,
        path: 'newproduct',
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
    },
    {
        component: Login,
        path: 'login',
        name: 'Trastienda'
    },
    {
        component: BackEnd,
        iden:'backend',
        path: 'backend',
        name: 'BackEnd'
    }
]