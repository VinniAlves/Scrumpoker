import Administrador from '../Jogadores/Administrador'
import Votante from '../Jogadores/Votante'
import Cartas from '../SistemaVoto'
import styles from './Mesa.module.css'
import dadosJogadoresMocados from '../../../../../assets/DadosMocados/dadosJogadores'
import stylesCartas from './modelosCartas.module.css'

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
                    
                        {dadosJogadoresMocados.map((jogadas)=>(
                            jogadas.id?
                                jogadas.admin?  
                                    null
                                : 
                                    <div className={stylesCartas[`containerCartasProntas_${jogadas.id}`]}>
                                    <div className={stylesCartas.topo}></div>
                                    <div className={stylesCartas.baixo}></div>
                            </div>
                            : <div className={stylesCartas.containerCartasNProntas}></div>
                        ))

                        }
                        

                </div>

                <Cartas />
            </div>
        </>
    )

}


export default Mesa