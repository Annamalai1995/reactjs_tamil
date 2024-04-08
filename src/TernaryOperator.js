 import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { useState } from 'react'

export const TernaryOperator=()=>
{
    const[wish,setWish]=useState("")
    const[result,setResult]=useState("")
    const[changes,setChanges]=useState({color:'red',backgroundColor:'black'})

    const trigger=(temp)=>
    {
        setWish(temp.target.value)
    }
    function execution()
    {
        (wish=="spring")?
        setChanges({color:'green',backgroundColor:'black'}):
        (wish=="winter")?
        setChanges({color:'blue',backgroundColor:'black'}):
        (wish=="rainy")?
        setChanges({color:'violet',backgroundColor:'black'}):
        (wish=="summer")?
        setChanges({color:'yellow',backgroundColor:'black'}):

        setChanges({color:'pink',backgroundColor:'black'})

        setResult(wish)
    }

    return(
        <>
        <input placeholder="Enter your favoriate season" type="text" onChange={trigger}/>
        <button onClick={execution} className="btn btn-outline-secondary" >Send</button>
        <p style={changes}>
            {result}
        </p>
        </>
    )
}