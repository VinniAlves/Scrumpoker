import Administrador from '../Jogadores/Administrador'
import Votante from '../Jogadores/Votante'
import styles from './Mesa.module.css'
import dadosJogadoresMocados from './dadosJogadores'


function Mesa(){
    
    


    return(
        <>
            <div className={styles.container}>

                <div className={styles.backgroundFormato}>

                    <div className={styles.containerJogadores}>
                        {dadosJogadoresMocados.map((player)=> (
                                player.admin ? <Administrador classId={player.id} nome={player.nomeJogador}/> : <Votante classIdVotante={player.id} nome={player.nomeJogador}/>
                        ))}
                    </div>


                    <div className={styles.backgroundForm}></div>
                    <div className={styles.circlesMeioMesa}></div>
                </div>
            </div>
        </>
    )

}


export default Mesa