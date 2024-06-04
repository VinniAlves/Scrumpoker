import Administrador from "./components/Jogadores/Administrador";
import Votante from "./components/Jogadores/Votante";
import Mesa from "./components/Mesa";
import styles from './Sala.module.css'


function  Sala(){

    const dadosJogadoresMocados = [
        {
            "nomeJogador": "Master Gamer",
            "admin": true,
            "id": 1
        },
        {
            "nomeJogador": "Dev frontend",
            "admin": false,
            "id": 2
        },
        {
            "nomeJogador": "Dev Backend",
            "admin": false,
            "id": 3
        },
        {
            "nomeJogador": "Dev Devops",
            "admin": false,
            "id": 4
        },
        {
            "nomeJogador": "Infra",
            "admin": false,
            "id": 5
        }
    ]




    return(
        <>
            <Mesa></Mesa>
            
            <div className={styles.container}>
                {dadosJogadoresMocados.map((player)=> (
                    player.admin ? <Administrador/> : <Votante/>


                ))}
            </div>
        </>
    )
}

export default Sala;