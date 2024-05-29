
const ROUTE_PATH = '/'

import Home from '../screens/PaginaInicial/Home'

const PaginaInicial: {path:string; element: JSX.Element}[]=[
    {
        path: ROUTE_PATH,
        element:<Home/>
    }
];

export default PaginaInicial