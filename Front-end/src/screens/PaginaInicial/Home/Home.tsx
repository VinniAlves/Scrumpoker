import NavBarHome from "../../../components/NavBarHome"

import styles from './Homer.module.css'
function Home(){
    return(
        <>
            <NavBarHome></NavBarHome>
            <div className={styles.containerUm}>
                <h1>Planning Scrum Poker</h1>
                <p>Crie e planeje suas próximas demendas Convide outras pessoas para participar Agora em uma tema mais <span>Divertidas</span></p>
                <button>Clique aqui para começar uma nova sala</button>
            </div>
                
            
        </>
    )

}

export default Home