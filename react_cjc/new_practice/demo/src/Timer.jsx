import { useState } from "react";
import { useEffect } from "react";
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

  }, [count]);



  return <h1>I've rendered {count} times!</h1>;
}

export default Timer


// | Scenario                 | Effect Runs When              | Result               | Problem                 |
// | ------------------------ | ----------------------------- | -------------------- | ----------------------- |
// | ❌ No `useEffect`         | Every render (in render body) | Infinite timers      | Crashes                 |
// | ⚠️ `useEffect()` no deps | After every render            | Infinite timers      | Bad                     |
// | ⚠️ `useEffect([])`       | Only once (on mount)          | Updates once         | Stops after 1 increment |
// | ✅ `useEffect([count])`   | After each count change       | Updates every second | Perfect timer           |
