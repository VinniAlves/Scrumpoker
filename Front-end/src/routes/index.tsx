import { useMemo } from "react";
import PaginaInicial from "./PaginaInicial.route";

function useRoutes(){
    const routes = useMemo(()=>[
        ...PaginaInicial

    ],[])
    return routes
}

export default useRoutes

