import styles from './JogoConfiguracao.module.css'
import  Logo from '../../../assets/Image/log.svg'
import InputConfig from './components/InputConfig'

function JogoConfiguracao(){

    return(
        <>
            <div className={styles.containerNav}>
                <img src={Logo}></img>
            </div>

            <div className={styles.containerConfig}>
                <InputConfig/>
            </div>
        </>
    )

}

export default JogoConfiguracao