import savings from '../../img/savings.svg' 
import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'
function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Gerenciador de Projetos!</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to="/novoProjeto" text="Criar projeto"/>

            <img src={savings} alt="cofrinho"/>
        </section>
    )
} export default Home