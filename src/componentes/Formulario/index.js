import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

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

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('O formulário foi salvo');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Digite os dados para criar a equipe {props.placeholder}</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu Nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu Cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Tecnologias:" itens={times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;