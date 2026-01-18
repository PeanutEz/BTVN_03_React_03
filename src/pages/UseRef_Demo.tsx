import { useRef, useState } from 'react';
function UseRef_Demo() {
    const countRef = useRef(0);
    const objRef = useRef({ current: 0 });
    const [count , setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
        countRef.current = countRef.current + 1;
        console.log({
            count: count + 1,
            countRef: countRef.current,
            obj: objRef.current
        });
    };
  return <button onClick={handleClick}>CLICK BUTTON</button>
  
}

export default UseRef_Demo