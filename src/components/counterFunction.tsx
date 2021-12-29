import React, {useState} from "react";

interface CounterProps {
    initialValue: number;
}

function CounterFunction(props : CounterProps) {
    const [count, setCount] = useState(props.initialValue);

    const handleClickIncrement = () => {
        setCount(count + 1);
    };

    const handleClickDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <p>Value = {count}</p>
            <button onClick={handleClickIncrement}>Click me to increase count</button>
            <button onClick={handleClickDecrement}>Click me to decrease count</button>
        </div>
    );
}

export default CounterFunction;