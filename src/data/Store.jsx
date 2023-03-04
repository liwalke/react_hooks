import React, { useState } from "react"

const intialState = {
    number: 1000,
    text: "Example with Store"
}

export const Context2 = React.createContext(intialState)

function Store (props) {
    const [state, setState] = useState(intialState)

    function updateState (key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <Context2.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t)
        }}>
            {props.children}
        </Context2.Provider>
    )
}

export default Store

/*
    Este cmponente contém o provedor do contexto, o estado inicial e o atual do contexto e a definição das funções que alteram o contexto

    1 - Criar o estado inicial do contexto. Linha 3
    2 - Criar o contexto, passando o estado inicial como parâmetro default e EXPORTAR. Linha 8
    3 - Criar o estado atual com useState, passando o estado inicial. Linha 11
    4 - Criar o Provider para o context:
        4.1 - Passar o estado atual como value. A propriedade value será o estado inicial do contexto. Linha 21
            4.1.1 - Este estado inicial deve ter os dados e as funções para alterar os dados;
    5 - Chamar props.children dentro do provider para renderizar os elementos filhos.
 */