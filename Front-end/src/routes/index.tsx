import { useMemo } from "react";
import PaginaInicial from "./PaginaInicial.route";
import SalaPoker from "./SalaPoker.route";
import JogoConfiguracao from "./JogoConfiguracao.route";

function useRoutes(){
    const routes = useMemo(()=>[
        ...PaginaInicial,
        ...SalaPoker,
        ...JogoConfiguracao

    ],[])
    return routes
}

export default useRoutes

