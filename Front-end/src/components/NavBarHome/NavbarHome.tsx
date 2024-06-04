import { useState } from 'react'
import  Logo from './assets/log.svg'
import styles from './NavbarHome.module.css'
import ModalRegistrar from '../Registrar/ModalRegistrar';
import { createPortal } from 'react-dom';

function NavBarHome(){

    const [openModal, setOpenModal] = useState(false);

    function AbrirModal(){
        if(openModal == false){
            setOpenModal(true);
        } else {
            setOpenModal(false)
        }
    }

    
    window.addEventListener("mouseup",function(event){
        var comp = document.getElementById('modalEntrar')
        console.log(comp)
        if(event?.target != comp){
            setOpenModal(false);
        }
    });


    return(
        <>  
         {openModal ? createPortal(<ModalRegistrar/>,document.getElementById('root')!):null}
            <div className={styles.container}>
                <img src={Logo}></img>
                <div className={styles.buttonContainer}>
                    <button>Registrar-se</button>
                    <button onClick={AbrirModal}>Entrar</button>
                </div>
                
            </div>
            
           

        </>
    )

}

export default NavBarHome