import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  initialCountValue: number;
}

export default function Counter({ initialCountValue }: CounterProps) {
  const [count, setCount] = useState(initialCountValue);

  const increment = () => setCount(count - 1);
  const decrement = () => setCount(count + 1);

  return (
    <div class="flex gap-8 py-6">
      <Button onClick={increment}>-1</Button>
      <p class="text-3xl">{count}</p>
      <Button onClick={decrement}>+1</Button>
    </div>
  );
}
