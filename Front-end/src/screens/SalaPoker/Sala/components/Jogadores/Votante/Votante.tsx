import styles from './Votante.module.css'
import CSS from 'csstype'
function Votante({classIdVotante}:{classIdVotante:Number}){

    const estilo: CSS.Properties = {
        'width': '55px',
        'height': '55px',
        'backgroundColor': 'green',
        'borderRadius': '100%',
        'zIndex': '99'
    }

    return(
        <>
            <div  className={styles[`container_${classIdVotante}`]} >
                <div style={estilo}></div>
            </div>
                
        </>
    )
}

export default Votante