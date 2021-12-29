import React, {useState} from "react";

function CounterFunction() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
        //setCount(currentCount => currentCount + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increaseCount}>Click me to increase count</button>
            <button onClick={decreaseCount}>Click me to decrease count</button>
        </div>
    );
}

export default CounterFunction;