import { Handlers } from "$fresh/server.ts";
import Header from "../../components/Header.tsx";

export const handler: Handlers = {
  async POST(req, ctx) {
    const urlToCreate = "http://localhost:8080/pessoa/store";
    const form = await req.formData();
    const nome = form.get("nome")?.toString();
    const sobrenome = form.get("sobrenome")?.toString();
    const dataNascimento = form.get("dataNascimento")?.toString();
    const json = JSON.stringify({
      nome: nome,
      sobrenome: sobrenome,
      dataNascimento: dataNascimento,
    });

    const response = await fetch(urlToCreate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });

    if (!response.ok) {
      throw new Error("Erro ao obter os dados.");
    }
    // const pessoa = await response.json();
    const result = true;

    return await ctx.render(result);
  },
};
export default function create({ data }: { data: boolean }) {
  console.log(data);
  return (
    <>
      <Header active="/pessoa" />
      <form method="post">
        <div class="px-4 py-8 mx-auto bg-[#86efac]">
          <div class="max-w-screen-md mx-auto space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
              <h2 class="text-base font-semibold leading-7 text-gray-900">
                Criar nova Pessoa
              </h2>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                Adicione as informações sobre a pessoa
              </p>

              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label
                    htmlFor="nome-input"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nome
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="nome"
                      id="nome-input"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label
                    htmlFor="sobrenome-input"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Sobrenome
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="sobrenome"
                      id="sobrenome-input"
                      autoComplete="family-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label
                    htmlFor="dataNascimento-input"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div class="mt-2">
                    <input
                      type="date"
                      name="dataNascimento"
                      id="dataNascimento-input"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              class="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
