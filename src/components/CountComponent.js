import React, { useState, useEffect } from 'react' ;




function CountComponent(props){
    const [count, setCount] = useState(0);
    useEffect(
        () => { 
            (async () => { 
                setCount(await getData());
                setCount(await getData2());
            })()
        }
    )
    return  (
        <div> 
            {count}
            <h1><button onClick={() => setCount(count + 1)}>Plus</button></h1>
        </div>
       
    );
}

function getData(){
    return new Promise((resolve, reject) => {
        console.log("getData")
        setTimeout(function(){
            resolve(3); 
        },3000)
    })
}
function getData2(){
    return new Promise((resolve, reject) => {
        console.log("getData2")
        setTimeout(function(){
            resolve(4);
        },4000)
    })
}
export default CountComponent;