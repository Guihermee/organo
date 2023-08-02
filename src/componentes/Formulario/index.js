import Botao from "../Botao"
import ListaSuspensa from "../ListaSuspensa"
import CampoTexto from "../campoTexto"
import "./Formulario.css"

const Formulario = () => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("O formulário foi submetido no meu do centro do olho do seu cu");
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto  label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} itens={times} label="Time" />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario