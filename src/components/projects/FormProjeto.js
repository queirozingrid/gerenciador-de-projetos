import { useState, useEffect } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './FormProjeto.module.css'
function FormProjeto({submitText, handleSubmit, projectData}){
    const [categorias, setCategorias] = useState([])
    const [project, setProject] = useState(projectData || {})
    
    useEffect(() => {
            fetch('http://localhost:5000/categories', {
            method:'GET',
            headers: {
                        'Content-Type': 'application/json',
                    },
        }).then((resp) => resp.json())
        .then(((data) => {
            setCategorias(data)
        }))
        .catch((err) => console.log(err))
        }, []
    )
    
    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: [e.target.value]})
    }

    function handleCategoria(e){
        setProject({...project, categoria: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }
            
        })
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input type="text"
                   placeholder="Insira o nome do projeto"
                   name="nomeDoProjeto"
                   text="Nome do Projeto"
                   handleOnChange={handleChange}
                   value={project.nomeDoProjeto ? project.nomeDoProjeto : ''}/>
            
            <Input type="number"
                   placeholder="Insira o orçamento total do projeto"
                   name="orcamentoDoProjeto"
                   text="Orçamento do Projeto"
                   handleOnChange={handleChange}
                   value={project.orcamentoDoProjeto ? project.orcamentoDoProjeto : ''}/>

            <Select text="Selecione a categoria"
                    name="categoria_id"
                    options={categorias}
                    handleOnChange={handleCategoria}
                    value={project.categoria ? project.categoria.id : ''}/>
            <SubmitButton text={submitText} />
        </form>
    )
} export default FormProjeto