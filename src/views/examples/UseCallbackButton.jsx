import React from "react";

function UseCallbackButtons(props) {
    
    console.log("Renderizei")

    return (
        <div>
            <button className="btn" onClick={() => props.inc(6)}>+6</button>
            <button className="btn" onClick={() => props.inc(12)}>+12</button>
            <button className="btn" onClick={() => props.inc(18)}>+18</button>
        </div>
    )
}

/*******************************************/
export default React.memo(UseCallbackButtons)
/*******************************************/

//React.memo() lets you skip re-rendering a component when its props are unchanged.