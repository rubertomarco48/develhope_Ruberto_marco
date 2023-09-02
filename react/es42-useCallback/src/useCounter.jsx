import { useRef,useCallback,useState } from "react";

export function useCounter() {
    const initialValue = useRef(0)
    const [counter,setCounter]= useState(initialValue.current);
    const handleIncrement = useCallback(()=>{
        setCounter(pre =>pre + 1)
    },[])
    const handleDecrement=useCallback(()=>{
        setCounter(pre =>pre - 1)
    },[])
    const handleReset=useCallback(()=>{
        setCounter(initialValue.current)
    },[])
    return{
        count:counter,
        onIncrement:handleIncrement,
        onDecrement:handleDecrement,
        onReset:handleReset
    }
}