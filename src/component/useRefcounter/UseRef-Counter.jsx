import React, {useRef} from 'react'

function UseRefCounter() {

    let iref = useRef(1);

    const inc = () =>{
        console.log(parseInt(iref.current.innerHTML) + 1);
        iref.current.innerHTML = parseInt(iref.current.innerHTML) + 1;
    }

    const dec = () =>{
        console.log(parseInt(iref.current.innerHTML) - 1);

        if(iref.current.innerHTML > 1){
            iref.current.innerHTML = parseInt(iref.current.innerHTML) - 1;
        }

        
    }

    return (
        <React.Fragment>

            <button onClick={inc}>+</button>
                
            <span ref = {iref}>
                {
                    iref.current
                }
            </span>
            
            <button onClick={dec}>-</button>
        </React.Fragment>
    )
}

export default UseRefCounter;