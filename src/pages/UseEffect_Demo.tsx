import { useEffect, useState } from "react";
import "./UseEffect_Demo.css";

const UseEffect_Demo = () => {
    const [count, setCount] = useState<number>(0);
    const [time, setTime] = useState<string>("");

    // mount
    useEffect(() => {
        console.log("Component mounted");
    }, []);

    // update
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    // cleanup
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="demo-card">
            <h2>useEffect Demo</h2>

            <p>Count: {count}</p>
            <div className="btn-group">
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>

            <p>Current time: {time}</p>
        </div>
    );
};

export default UseEffect_Demo;
