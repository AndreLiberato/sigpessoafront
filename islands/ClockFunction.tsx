import { useEffect, useState } from "preact/hooks";

export default function ClockFunction() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = new Date(time).toLocaleTimeString();

  return <h1>{formattedTime}</h1>;
}
