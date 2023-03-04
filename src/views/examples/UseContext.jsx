import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import DataContext from '../../data/DataContext'
import { Context2 } from '../../data/Store'

const UseContext = (props) => {
    const { state, setState } = useContext(DataContext)
    const { number, text, setNumber } = useContext(Context2)

    function addNumber(delta) {
        setState({
            ...state,
            number: state.number + delta
        })
    }

    return (
        <>
            <div className="UseContext">
                <PageTitle
                    title="Hook UseContext"
                    subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!" />

                <SectionTitle title="Exercício 1" />
                <div className="center">
                    <span className="text">{state.text}</span>
                    <span className="text">{state.number}</span>
                    <div>
                        <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                        <button className="btn" onClick={() => addNumber(1)}>+1</button>
                    </div>
                </div>

                <SectionTitle title="Exercício 2" />
                <div className="center">
                    <span className="text">{text}</span>
                    <span className="text">{number}</span>
                    <div>
                        <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                        <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseContext

/*
    1 - Criar um componente chamado Store que conterá tudo envolvendo o contexto (Ver instruções dentro do componente Store).  ../../data/Store
    2 - O componente Store que foi criado, contém o Provider. Este componente deverá ser instanciado dentro de um componente pai escolhido para conter o contexto.
        2.1 - Nesse exemplo o contexto definido na Store foi implementado no App.jsx, envolvendo toda a aplicação. Assim todos componentes podem se inscrever nesse contexto;
    3 - Este componente será um consumidor do contexto da Store:
        3.1 - Importar o contexto. Linha 6
        3.2 - Importar o useContext. Linha 1
        3.3 - Extrair as variáveis e funções do contexto, somente as que serão utilizadas nesse componente. Linha 10
        3.4 - Usando as variáveis. Linhas 38 e 39
        3.5 - Editando o contexto. Linhas 41 e 42
*/