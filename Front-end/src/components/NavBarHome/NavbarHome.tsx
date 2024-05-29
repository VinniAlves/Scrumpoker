import  Logo from './assets/log.svg'
import styles from './NavbarHome.module.css'

function NavBarHome(){

    return(
        <>
            <div className={styles.container}>
                <img src={Logo}></img>
                <div className={styles.buttonContainer}>
                    <button>Registrar-se</button>
                    <button>Entrar</button>
                </div>
                
            </div>
        </>
    )

}

export default NavBarHome