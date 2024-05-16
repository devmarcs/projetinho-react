import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

const Formulario = (props) => {



    const times = [
        'Ruby',
        'JavaScript',
        'Python',
        'Go',
        'Java',
        'C',
        'C++',
        'Kotlin',
        'Flutter'

    ]

    return (
        <section className='formulario'>
            <form>
                <h2>Digite os dados para criar a equipe {props.placeholder}</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu Nome" />
                <CampoTexto label="Cargo" placeholder="Digite o seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Tecnologias:" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario;