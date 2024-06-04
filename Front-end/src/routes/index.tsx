import { useMemo } from "react";
import PaginaInicial from "./PaginaInicial.route";
import SalaPoker from "./SalaPoker.route";

function useRoutes(){
    const routes = useMemo(()=>[
        ...PaginaInicial,
        ...SalaPoker

    ],[])
    return routes
}

export default useRoutes

