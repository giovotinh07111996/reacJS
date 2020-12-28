import React  from 'react'

function FunctionComponent(props){
    console.log("props",props);
    return (
        <>
           <button onClick={props.DescCount}>-</button>
           <button onClick={props.IncCount}>+</button>
        </>
    )
}

export default FunctionComponent;