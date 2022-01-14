import Message from "../layout/Message"
import {useNavigate} from 'react-router-dom'

function Projetos(){
    const navigate = useNavigate()
    let mensagem = ''

    if(navigate.state){
        mensagem = navigate.state.message
    }

    return(
        <div>
            <h1>Meus projetos</h1>
            {mensagem && <Message msg={mensagem} type="success"/>}
        </div>
    )
} export default Projetos