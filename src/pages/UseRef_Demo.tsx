import { useRef, useState } from 'react';

function UseRef_Demo() {
    const countRef = useRef(0);
    const objRef = useRef({ current: 0 });
    const textRef = useRef('Hello');
    const numberRef = useRef(100);
    const timerRef = useRef<number | null>(null);

    const [count, setCount] = useState(0);
    const [timerCount, setTimerCount] = useState(60);

    const [displayData, setDisplayData] = useState({
        count: 0,
        countRef: 0,
        obj: { current: 0 },
        textRef: 'Hello',
        numberRef: 100,
        timerRef: 0, 
    });

    const handleClick = () => {
        setCount(count + 1);
        countRef.current = countRef.current + 1;
        textRef.current = textRef.current + ' ✓';
        numberRef.current = numberRef.current + 50;

        const newData = {
            count: count + 1,
            countRef: countRef.current,
            obj: objRef.current,
            textRef: textRef.current,
            numberRef: numberRef.current,
            timerRef: timerRef.current ?? 0
        };

        setDisplayData(newData);
        console.log(newData);
    };

    const handleStart = () => {
        if (timerRef.current !== null) return;

        timerRef.current = window.setInterval(() => {
            setTimerCount(prevCount => {
                if (prevCount <= 1) {
                    if (timerRef.current !== null) {
                        clearInterval(timerRef.current);
                        timerRef.current = null;
                    }
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);

        console.log('Start -> ', timerRef.current);
    };

    const handleStop = () => {
        if (timerRef.current !== null) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        console.log('Stop -> ', timerRef.current);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <button
                onClick={handleClick}
                style={{ padding: '10px 20px', fontSize: '16px', marginBottom: '20px' }}
            >
                CLICK BUTTON
            </button>

            <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', backgroundColor: '#f9f9f9', marginBottom: '20px' }}>
                <h2>Giá trị hiện tại:</h2>
                <p><strong>State count:</strong> {displayData.count}</p>
                <p><strong>countRef.current:</strong> {displayData.countRef}</p>
                <p><strong>objRef.current:</strong> {JSON.stringify(displayData.obj)}</p>
                <p><strong>textRef.current:</strong> {displayData.textRef}</p>
                <p><strong>numberRef.current:</strong> {displayData.numberRef}</p>
                <p><strong>timerRef.current:</strong> {displayData.timerRef}</p>
            </div>

            <div style={{ padding: '20px', border: '1px solid #007bff', borderRadius: '5px', backgroundColor: '#e3f2fd' }}>
                <h2>{timerCount}</h2>
                <button
                    onClick={handleStart}
                    style={{ padding: '10px 20px', fontSize: '16px', marginRight: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Start
                </button>
                <button
                    onClick={handleStop}
                    style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Stop
                </button>
            </div>
        </div>
    );
}

export default UseRef_Demo;
