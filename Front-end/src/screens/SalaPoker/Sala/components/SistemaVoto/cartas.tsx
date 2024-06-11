import styles from "./cartas.module.css"

function Cartas(){

    const esquemaVotacao =[
        {
            "index": 1
        },
        {
            "index": 2
        },
        {
            "index": 3
        },
        {
            "index": 5
        },
        {
            "index": 8
        }
        
    ]



    return(
        <div className={styles.containerMaster}>
            <div className={styles.container}>

                {
                    esquemaVotacao.map((cartas)=>(
                        <div className={styles.backgroundCartas}>
                            <p className={styles.paragrafoTop}>{cartas.index}</p>
                            <h1 className={styles.hMid}>{cartas.index}</h1>
                            <p className={styles.paragrafoBottom}>{cartas.index}</p>
                        </div>
                        
                    ))
                }

            </div>

        </div>
    )

}

export default Cartas