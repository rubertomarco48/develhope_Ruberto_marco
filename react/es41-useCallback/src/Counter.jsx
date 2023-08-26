import { useCallback,useRef,useState } from "react"

export function Counter() {
    const initialValue = useRef(0)
    const [counter,setCounter]= useState(initialValue.current);
    const onIncrement = useCallback(()=>{
        setCounter(pre =>pre + 1)
    },[])
    const onDecrement=useCallback(()=>{
        setCounter(pre =>pre - 1)
    },[])
    const onReset=useCallback(()=>{
        setCounter(initialValue.current)
    },[])
    return (
        <>
        <h1>{counter}</h1>
        <button onClick={onIncrement}>Incrementa</button>
        <button onClick={onDecrement}>Decrementa</button>
        <button onClick={onReset}>Reset</button>
        </>
    )
}