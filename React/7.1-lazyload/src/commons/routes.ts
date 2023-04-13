import { ContactoPage, FormacionPage, HomePage, ServiciosPage, TrabajoPage } from "../pages"
import { ProductosPage } from "../pages/ProductosPage";

type JSXComponent = () => JSX.Element;

interface Route{
    path: string;
    component: JSXComponent;
    name: string;
    children?: Route[]
}

export const routes:Route[]=[
    {
        path: '/home',
        component: HomePage,
        name: 'Inicio'
    },
    {
        path: '/servicios',
        component: ServiciosPage,
        name: 'Servicios'
    },
    {
        path: '/formacion',
        component: FormacionPage,
        name: 'Formación'
    },
    {
        path: '/trabajo',
        component: TrabajoPage,
        name: 'Trabajos'
    },
    {
        path: '/productos',
        component: ProductosPage,
        name: 'Productos'
    },
    {
        path: '/contacto',
        component: ContactoPage,
        name: 'Contacto'
    }
]