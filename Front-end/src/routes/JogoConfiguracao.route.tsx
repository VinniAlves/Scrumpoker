const ROUTE_PATH = '/config';

import Config from '../screens/SalaPoker/PaginaConfiguracao/JogoConfiguracao'

const JogoConfiguracao:{path:string; element: JSX.Element}[]=[
    {
        path:ROUTE_PATH,
        element: <Config/>
    }
]

export default JogoConfiguracao