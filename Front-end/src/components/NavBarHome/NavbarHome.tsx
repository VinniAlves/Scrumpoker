import { useState } from 'react'
import  Logo from './assets/log.svg'
import styles from './NavbarHome.module.css'
import ModalRegistrar from '../Registrar/ModalRegistrar';

function NavBarHome(){

    const [openModal, setOpenModal] = useState(true);

    function AbrirModal(){
        if(openModal == false){
            setOpenModal(true);
        } else {
            setOpenModal(false)
        }
    }


    return(
        <>  
            <div className={styles.container}>
                <img src={Logo}></img>
                <div className={styles.buttonContainer}>
                    <button>Registrar-se</button>
                    <button onClick={AbrirModal}>Entrar</button>
                </div>
                
            </div>

            {openModal ? <ModalRegistrar></ModalRegistrar>:null}

        </>
    )

}

export default NavBarHome