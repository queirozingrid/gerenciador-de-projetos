import { useNavigate } from 'react-router-dom'
import FormProjeto from '../projects/FormProjeto'
import styles from './NovoProjeto.module.css'
function NovoProjeto(){
    const history = useNavigate()

    function createPost(project){
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            }, body: JSON.stringify(project)
        }).then((resp) => resp.json())
          .then((data) => {
            history('/projetos', {message: "Projeto criado com sucesso!"})
          })
          .catch((err) => console.log(err))
    }

    return(
        <div className={styles.novoprojeto_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar serviços</p>
            <FormProjeto handleSubmit={createPost} submitText="Criar Projeto"/>
        </div>
    )
} export default NovoProjeto