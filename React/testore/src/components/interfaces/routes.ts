import { ReactNode } from "react";
import { BackEnd, Contacto, Inicio, Login, ProductosPage } from "../Pages";


type CHIBANCAS = () => JSX.Element;
//CHBANCAS ES UNA VARIABLE QUE PUEDE TENER CUALQUIER NOMBRE

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
        component: Contacto,
        path: 'contacto',
        name: 'Contacto'
    },
    {
        component: Login,
        path: 'login',
        name: 'Trastienda'
    },
    // {
    //     component: BackEnd,
    //     iden:'backend',
    //     path: 'backend',
    //     name: 'BackEnd'
    // }
]