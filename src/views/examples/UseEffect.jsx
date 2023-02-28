import React, { useEffect, useRef, useState } from 'react'
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
    
    //OBS.: No exemplo do professor foi usado o hook useState para fatorial e paridade. Através da escrita no console, foi verificado que com o useState gerava 3 renderizações a cada alteração de number. Então foi usado o hook useRef, que não causa re-render.    
    //console.log('Renderizei')

    const [number, setNumber] = useState(0)
    const fatorial = useRef(0)
    const paridade = useRef(0)

    useEffect(_ => { fatorial.current = calcFatorial(number) }, [number])
    useEffect(_ => { paridade.current = verificaParidade(number) },[number])

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
                    <span className='text red'>{fatorial.current}</span>
                </div>
            </div>

            <SectionTitle title='Exercicio 02' />
            <div className="center">
                <div>
                    <span className='text'>Tipo: </span>
                    <span className='text red'>{paridade.current}</span>
                </div>
            </div>
        </div >
    )
}

export default UseEffect