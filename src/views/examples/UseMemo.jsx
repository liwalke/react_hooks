import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum ( a, b ){
    const future = Date.now() + 2000
    while (Date.now() < future) {} //Vai travar por 2seg, simulando uma função lenta/pesada
    return a + b
}

const UseMemo = (props) => {
    const [ n1, setN1 ] = useState(0)
    const [ n2, setN2 ] = useState(0)
    const [ n3, setN3 ] = useState(0)

    //O retorno da callback do useMemo será armazenado em cache, ou seja, não será modificado entre as renderizações. Só será alterado quando a callback for executada novamente, ou seja, no trigger de alguma dependancy. O valor memorizado foi atribuido a variável result. No final das contas funciona como a soma de: (useState (memorização) + useEffect (manipulação)).
    
    const result = useMemo(() => sum(n1, n2), [n1, n2])
    console.log('Renderizei')

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <div className="center">
                <span className="text">Resultado: {result}</span>
                <input type="number" className="input" value={n1} onChange={e => setN1(+e.target.value)}/>
                <input type="number" className="input" value={n2} onChange={e => setN2(+e.target.value)}/>
                <input type="number" className="input" value={n3} onChange={e => setN3(+e.target.value)}/>
            </div>
        </div>
    )
}

export default UseMemo
