import './App.css'
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import DataContext, { data } from '../data/DataContext'
import Store from '../data/Store'

const App = props => {
    const [state, setState] = useState(data)

    return (
        <Store>
            <DataContext.Provider value={{ state, setState }}>
                <div className="App">
                    <BrowserRouter>
                        <Menu />
                        <Content />
                    </BrowserRouter>
                </div>
            </DataContext.Provider>
        </Store>
    )
}

export default App

/*
    Continuação steps sobre CONTEXT API - STORE
    1 - Importar a Store; Linha 9
    2 - Instanciar a Store para envolver os componentes que precisam consumir o contexto. Linha 15 a 24
    3 - Continua em: "../views/examples/UseReducer.jsx"
*/