import { useState } from 'react'
import styles from './InputConfig.module.css'
import OpcoesVotos from '../../../../../assets/DadosMocados/esquemaDeVotacao'

function InputConfig(){

    const  [openOptions, setOpenOptions] = useState(true);
    const [inputEscolha, setInputEscolha] = useState('');

    function OpenModalVote(){
        if(openOptions){
            setOpenOptions(false)
        }else{
            setOpenOptions(true)
        }

    }


    return(
        <>
            <div className={styles.container}>
                
                <div className={styles.inputNomeSala}>
                    <p>Nome Sala</p>
                    <input></input>
                </div>
                
                <div className={styles.inputSisVoto}>
                    <p>Sistema de Voto</p>
                    <input readOnly className={styles.SisButton} onClick={OpenModalVote} value={inputEscolha}></input>
                </div>
               {
                openOptions ? 
                
                <div className={styles.optionMenu}>
                    
                { OpcoesVotos.map((index)=>(
                        <button onClick={()=>{setInputEscolha(`${index.name} (${index.size})`)}}>{`${index.name} (${index.size})`}</button>
                    ))
                }
                <button className={styles.btnEscolha}>Criar cartas customizadas...</button>
                    

                </div>
                
                : null
               }
                
                <div className={styles.inputNomeSala}>
                    <p>Quem pode revelar os votos</p>
                    <input></input>
                </div>
                <button className={styles.ButtonContainer}>Criar Jogo</button>
            </div>

        </>
    )
}

export default InputConfig