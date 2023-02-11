import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

function verificaParidade(num){
    const n = parseInt(num)
    if(n % 2 === 0) return 'par'
    return 'impar'
}


const UseEffect = (props) => {
    const [number, setNumber] = useState(0)
    const [fatorial, setFatorial] = useState(0)
    const [paridade, setParidade] = useState(0)

    useEffect(_ => setFatorial(calcFatorial(number)), [number])
    useEffect(_ => setParidade(verificaParidade(number)),[number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div className="center">
                <input type="number" className="input" onChange={e => setNumber(e.target.value)} value={number} />
            </div>
            <SectionTitle title='Exercicio 01' />
            <div className="center">
                <div>
                    <span className='text'>Fatorial: </span>
                    <span className='text red'>{fatorial}</span>
                </div>
            </div>

            <SectionTitle title='Exercicio 02' />
            <div className="center">
                <div>
                    <span className='text'>Tipo: </span>
                    <span className='text red'>{paridade}</span>
                </div>
            </div>
        </div >
    )
}

export default UseEffect