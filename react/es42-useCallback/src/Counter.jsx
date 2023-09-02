
import { useCounter } from "./useCounter"

export function Counter() {
    const {count,onIncrement,onDecrement,onReset}=useCounter()
    return (
        <>
        <h1>{count}</h1>
        <button onClick={onIncrement}>Incrementa</button>
        <button onClick={onDecrement}>Decrementa</button>
        <button onClick={onReset}>Reset</button>
        </>
    )
}