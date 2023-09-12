import Clock from "../islands/Clock.tsx";
import Counter from "../islands/Counter.tsx";
import Header from "../components/Header.tsx";
import CounterComponent from "../islands/CounterComponent.tsx";
import ClockFunction from "../islands/ClockFunction.tsx";

export default function Home() {
  const initialCountValue = 10;
  return (
    <>
      <Header active="/" />
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Bem Vindo(a) ao SigPessoa</h1>
          <p class="my-4">
            Sistema Integrado de Gestão de Pessoas
          </p>
        </div>
        <Counter initialCountValue={initialCountValue}></Counter>
        <CounterComponent></CounterComponent>
        <Clock>1231</Clock>
        <ClockFunction></ClockFunction>
      </div>
    </>
  );
}
