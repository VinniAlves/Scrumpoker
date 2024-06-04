import styles from './Mesa.module.css'

function Mesa(){
    
    return(
        <>
            <div className={styles.container}>
                <div className={styles.backgroundFormato}>
                    <div className={styles.backgroundForm}></div>

                    <div className={styles.circlesMeioMesa}></div>
                </div>
                

            </div>
        </>
    )

}


export default Mesa