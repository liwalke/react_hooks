import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButton'

const UseCallback = (props) => {
    const [ count, setCount ] = useState(0)
    
    // function inc(delta){
    //     setCount(c => c + delta)
    // }
    
    //useCallback semelhante ao useMemo, ambos memorizam e retornam algo. A principal diferença é o tipo do retorno, useMemo um valor e useCallback retorna uma função.
    
    //Neste exemplo é passado uma função "inc" como prop para o componente filho: <UseCallbackButtons inc={inc}/>. Se a função for escrita "solta" no componente pai, a cada nova renderização será criado uma nova função. Assim o componente filho vai considerar como uma mudança de props e vai renderizar também. Então foi usado o useCallback para criar uma função e memoriza-la, assim não terá alteração de props no componente filho, e este não precisará re-render..
    //OBS.: É preciso utilizar o React.memo no componente filho: export default React.memo(UseCallbackButtons)

    const inc = useCallback(function (delta) { setCount(c => c + delta) }, [setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>

                <UseCallbackButtons inc={inc}/>
            </div>
        </div>
    )
}

export default UseCallback
