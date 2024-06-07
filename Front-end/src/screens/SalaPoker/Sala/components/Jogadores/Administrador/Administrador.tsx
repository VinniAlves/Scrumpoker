import styles from './Administrador.module.css'
import CSS from 'csstype'

function Administrador ({classId,nome}:{classId:Number,nome:String}){
    
    
      
   
    
    return(
        <>
            <div  className={styles[`container_${classId}`]} >
                <p>{nome}</p>
                <div  className={styles.cabeca}></div>
                <div className={styles.corpo}></div>
            </div>
                
        </>
    )
}

export default Administrador