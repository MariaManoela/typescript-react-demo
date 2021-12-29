import React, {useState} from "react";

function CounterFunction() {
    const [count, setCount] = useState(0);

    const handleClickIncrement = () => {
        setCount(count + 1);
        //setCount(currentCount => currentCount + 1);
    };

    const handleClickDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClickIncrement}>Click me to increase count</button>
            <button onClick={handleClickDecrement}>Click me to decrease count</button>
        </div>
    );
}

export default CounterFunction;