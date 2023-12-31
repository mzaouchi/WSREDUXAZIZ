import { useDispatch, useSelector } from "react-redux"
import { decrement, handleChange, increment } from "../Redux/Actions"

const Counter=()=>{
   const count = useSelector(state=>state.count)
   const dispatch = useDispatch()

   const textP = useSelector(state=> state.textP) 
    return(
        <div>
            <h2>Counter Component</h2>
            <button onClick={()=>count>0 && dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=> dispatch(increment())}>+</button>
            <br/>
            <br/>
            <br/>
            <input type="text" onChange={(e)=>dispatch(handleChange(e.target.value))}/>
            <h3>{textP}</h3>
        </div>
    )
}

export default Counter