import { useState } from "react";
import { decrementNumber,incrementNumber } from "./Action";
import {createStore} from 'redux';
import reducer from "./Reducer"

const store = createStore(reducer)
export default function LinkCounter(){

  

    const[count,setcount] = useState(0)

    store.subscribe(()=>{
        setcount(store.getState().count);
    })




    return(
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={()=>store.dispatch(incrementNumber())}>Like</button>
            <button onClick={()=>store.dispatch(decrementNumber())}>Dislike</button>
        </div>
    )

}