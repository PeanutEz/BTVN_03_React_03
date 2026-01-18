import { useState, useMemo, useCallback} from 'react';
import UseCallback_Demo from './UseCallback_Demo';



function UseMemo_Demo() {
    const [count, setCount] = useState(0);

    function fibonacci(n : number): number {
        if (n < 2) {
          return n;
    }
        return fibonacci(n - 1) + fibonacci(n - 2);
 }
 
    console.time('fibonacci');
    const result = useMemo(() => {
        return fibonacci(36);
    }, []);
    console.timeEnd('fibonacci');

    const [total] = useState(30);

    const submitForm = useCallback(() => {
        alert('SUBMITTED');
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>result: {result}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>

        <UseCallback_Demo total={total} submitForm={submitForm} />
        </div>
    );
}

    export default UseMemo_Demo;