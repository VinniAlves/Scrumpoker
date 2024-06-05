import styles from './Administrador.module.css'
import CSS from 'csstype'

function Administrador ({classId}:{classId:Number}){
    
    
        const estilo: CSS.Properties = {
            'width': '55px',
            'height': '55px',
            'backgroundColor': 'aqua',
            'borderRadius': '100%',
            'zIndex': '99'
        }
    
   
    
    return(
        <>
            <div  className={styles[`container_${classId}`]} >
                <div style={estilo}></div>
            </div>
                
        </>
    )
}

export default Administrador