import styles from "./cartas.module.css"
import esquemaVotacao from "../../../../../assets/DadosMocados/esquemaDeVotacao"

function Cartas(){

    
    let save:HTMLElement = document.getElementById("")!

    function selecionarCarta(inputButton:number){
        
        const elementTeste: HTMLElement = document.getElementById(`containerBackground_${inputButton}`)!
        
        if(elementTeste != save){
            
            if(save!=null){
                save?.setAttribute("style","")
            }

            save = elementTeste
            
            elementTeste?.setAttribute("style","background-color:#FFE143; transform:  translateY(-30px);")
            
        }else if (elementTeste == save){
            save?.setAttribute("style","")
        }
    }

   
    return(
        <div className={styles.containerMaster}>
            <div className={styles.container}>

                {
                    esquemaVotacao.map((cartas)=>(
                        
                            <button id={`containerBackground_${cartas}`} onClick={()=>selecionarCarta(cartas)} className={styles.backgroundCartas}>
                                <p className={styles.paragrafoTop}>{cartas}</p>
                                <h1 className={styles.hMid}>{cartas}</h1>
                                <p className={styles.paragrafoBottom}>{cartas}</p>
                            </button>
                        
                    ))
                }

            </div>

        </div>
    )

}

export default Cartas