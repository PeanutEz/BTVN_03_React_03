import { useState } from "react";

export default function TypeAnnotation_Demo() {
  const username: string = "Duy";

//   type annotation for variable
  const [count, setCount] = useState<number>(5);

  type annotaion for object
  const [profile, setProfile] = useState<{ name: string; age: number }>({
    name: "Duy",
    age: 22,
  });

  function handleIncrease(step: number): void {
    setCount(prev => prev + step);
  }

    function handleDecrease(step: number): void {
    setCount(prev => prev - step);
  }

  function printProfile(user: { name: string; age: number }): string {
    return `${user.name} - ${user.age}`;
  }

  const scores: number[] = [10, 20, 30];

  return (
    <div>
      <h1>Type Annotation Demo</h1>

      <p>Username: {username}</p>
      <p>Count: {count}</p>
      <button onClick={() => handleIncrease(1)}>+1</button>
      <button onClick={() => handleDecrease(1)}>-1</button>

      <p>Profile: {printProfile(profile)}</p>
        <button
        onClick={() =>
          setProfile({ ...profile, age: profile.age + 1 })
        }
        >
        Increase Age
      </button>

      <ul>
        {scores.map((score: number, i: number) => (
          <li key={i}>{score}</li>
        ))}
      </ul>
    </div>
  );
}
