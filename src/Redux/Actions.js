import { DECREMENT, HANDLECHANGE, HANDLESHOW, INCREMENT } from "./TypeActions"

export const increment=()=>{
    return(
        {
            type : INCREMENT
        }
    )
}

export const decrement=()=>{
    return(
        {
            type : DECREMENT
        }
    )
}

export const handleChange=(payload)=>{
    return(
        {
            type : HANDLECHANGE,
            payload
        }
    )
}

export const handleShow=()=>{
    return(
        {
            type : HANDLESHOW
        }
    )
}