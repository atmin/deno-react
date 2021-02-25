import React, { useCallback, useState } from "react";

export type AppProps = { counter?: number };

export const App = ({ counter }: AppProps) => {
  const [count, setCount] = useState(counter || 0);
  const onClick = useCallback(() => {
    const newCount = count + 1;
    setCount(newCount);
    //@ts-ignore
    window.history.replaceState(null, "", newCount);
  }, [count]);

  return (
    <div>
      <h1>Deno ☯ React</h1>
      <button onClick={onClick}>+1</button>
      <p>Counter: {count}</p>
    </div>
  );
};
