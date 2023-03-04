import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    keyA: 'ValueA',
    keyB: 'ValueB',
    number: 0,
}

const ACTIONS = {
    INCREASE: 'increase',
    DECREASE: 'decrease',
}

function reducer(state, action) {
    switch(action.type){
        case ACTIONS.INCREASE:
            return {...state, number: state.number + action.delta}
        case ACTIONS.DECREASE:
            return {...state, number: state.number - action.delta}
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            
            <div className="center">
                <span className="text">Contagem: {state.number}</span>
                <div>
                    <button className="btn" onClick={() => dispatch({type: ACTIONS.DECREASE, delta: 1})}>-1</button>
                    <button className="btn" onClick={() => dispatch({type: ACTIONS.INCREASE, delta: 1})}>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer

/*
    STEPS:

    1 - Criar o estado inicial do reducer. Linha 4
    2 - Criar a função reducer. Linha 15
        2.1 - Criar um objeto constante com as actions. Linha 10
    3 - Importar o useReducer de React. Linha 1
    4 - Criar o estado do reducer que será usado no componente. Linha27
    5 - Consumo do estado. Linha 37
    6 - Disparar a função reducer para alterar o estado. Linhas 39 e 40
    7 - Organizar em arquivos separados. Não implementado.
*/