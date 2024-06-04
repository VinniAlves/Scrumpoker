const ROUTE_PATH = '/poker';

import Salas from '../screens/SalaPoker/Sala/Sala'

const SalaPoker:{path:string; element: JSX.Element}[]=[
    {
        path:ROUTE_PATH,
        element: <Salas/>
    }
]

export default SalaPoker