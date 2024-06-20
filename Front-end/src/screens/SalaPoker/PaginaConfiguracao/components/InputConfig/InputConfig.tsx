import styles from './InputConfig.module.css'


function InputConfig(){
    return(
        <>
            <div className={styles.container}>
                
                <div className={styles.inputNomeSala}>
                    <p>Nome Sala</p>
                    <input></input>
                </div>
                
                <input></input>
                <input></input>
                <button>Criar Jogo</button>
            </div>

        </>
    )
}

export default InputConfig