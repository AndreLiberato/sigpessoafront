import { Handlers, RouteContext } from "$fresh/server.ts";
import { Button } from "../../../components/Button.tsx";
import Header from "../../../components/Header.tsx";

export const handler: Handlers = {
  async POST(req, ctx) {
    const pessoa_id = ctx.params.id;
    const urlToDelete = `http://localhost:8080/pessoa/delete/${pessoa_id}`;

    const response = await fetch(urlToDelete, {
      method: "DELETE"
    });

    console.log(response);


    if (!response.ok) {
      throw new Error("Erro ao obter os dados.");
    }
  
    console.log(response);

    // const pessoa = await response.text();
    return await ctx.render();
  },
};

export default async function Show(_req: Request, ctx: RouteContext) {
  const urlToReturn = `${ctx.url.origin}/pessoa`;

  return (
    <>
      <Header active="/pessoa" />
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1>Excluir pessoa</h1>
          <div>
            <h2>Tem certeza que deseja realizar esta ação?</h2>
            <p>
              Após a confirmação desta ação, não será possivel desfazer seus
              efeitos!
            </p>
          </div>
          <form class="w-full" method="post">
            <div class="flex place-content-between">
              <div class="flex justify-center align-middle px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors">
                <a href={urlToReturn}>
                  Voltar
                </a>
              </div>

              <button class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors" type="submit">Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
