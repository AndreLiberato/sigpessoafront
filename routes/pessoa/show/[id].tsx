import { RouteContext } from "$fresh/server.ts";
import Header from "../../../components/Header.tsx";

export default async function Show(_req: Request, ctx: RouteContext) {
  const pessoa_id = ctx.params.id;
  const urlToGetOne = `http://localhost:8080/pessoa/get/${pessoa_id}`;

  async function request() {
    try {
      const response = await fetch(urlToGetOne, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Erro ao obter os dados.");
      }

      const data = await response.json();
      return data;
    } catch (erro) {
      console.error("Ocorreu um erro:", erro);
    }
  }

  const response = await request();

  return (
    <>
      <Header active="/pessoa" />
      <h1>Visualização dos atributos de pessoa</h1>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <div>
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Pessoa
              </h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Informações detalhadas
              </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Identificador
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {response.id}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Nome
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {response.nome}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Sobrenome
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {response.sobrenome}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Data de nascimento
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {response.dataNascimento}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
