import styles from './Votante.module.css'
import CSS from 'csstype'
function Votante({classIdVotante,nome}:{classIdVotante:Number,nome:String}){

   
    return(
        <>
            <div  className={styles[`container_${classIdVotante}`]} >
                <p>{nome}</p>
                <div  className={styles.cabeca}></div>
            </div>
                
        </>
    )
}

export default Votante