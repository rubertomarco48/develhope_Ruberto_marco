import { useCounter } from "./useCounter"

export function Counter() {
    const {counter,onDecrement,onIncrement,onReset}=useCounter(0)
    return (
        <>
        <h1>{counter}</h1>
        <button onClick={onIncrement}>Incrementa</button>
        <button onClick={onDecrement}>Decrementa</button>
        <button onClick={onReset}>Reset</button>
        </>
    )
}