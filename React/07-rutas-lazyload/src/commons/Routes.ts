import { ContactoPage, FormacionPage, HomePage, ServiciosPage, TrabajosPage } from "./pages";

type TSXComponent=()=>JSX.Element
interface Route{
    path: string;
    component: TSXComponent;
    name: string;
    children?:Route[]
}
export const routes: Route[]=[
    {
        path:'/home',
        component: HomePage,
        name: 'Home'
    },
    {
        path:'/servicios',
        component: ServiciosPage,
        name: 'Servicios'
    },
    {
        path:'/formacion',
        component: FormacionPage,
        name: 'Formacion'
    },
    {
        path:'/trabajo',
        component: TrabajosPage,
        name: 'Trabajo'
    },
    {
        path:'/contacto ',
        component: ContactoPage,
        name: 'Contacto'
    }
]