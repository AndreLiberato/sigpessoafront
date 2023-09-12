import { Handlers } from "$fresh/server.ts";
import Header from "../../../components/Header.tsx";
import Pessoa from "../../../models/Pessoa.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const pessoa_id = ctx.params.id;
    const urlToGetOne = `http://localhost:8080/pessoa/get/${pessoa_id}`;
    const response = await fetch(urlToGetOne, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Erro ao obter os dados.");
    }

    const pessoa = await response.json();
    return await ctx.render(pessoa);
  },
  async POST(req, ctx) {
    const pessoa_id = ctx.params.id;
    const urlToUpdate = `http://localhost:8080/pessoa/update/${pessoa_id}`;
    const form = await req.formData();
    const nome = form.get("nome")?.toString();
    const sobrenome = form.get("sobrenome")?.toString();
    const dataNascimento = form.get("dataNascimento")?.toString();
    const json = JSON.stringify({
      nome: nome,
      sobrenome: sobrenome,
      dataNascimento: dataNascimento,
    });

    const response = await fetch(urlToUpdate, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });

    if (!response.ok) {
      throw new Error("Erro ao obter os dados.");
    }

    const pessoa = await response.json();
    return await ctx.render(pessoa);
  },
};

export default function Greet({ data }: { data: Pessoa }) {
  return (
    <>
      <Header active="/pessoa" />
      <h1>Visualização dos atributos de pessoa</h1>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <form id="pessoa-edit-form" method="POST">
            <input
              required
              type="text"
              name="nome"
              id="nome-text-input"
              value={data.nome}
            />
            <input
              required
              type="text"
              name="sobrenome"
              id="sobrenome-text-input"
              value={data.sobrenome}
            />
            <input
              required
              type="date"
              name="dataNascimento"
              id="dataNascimento-date-input"
              value={new Date(data.dataNascimento).toISOString().split("T")[0]}
            />
            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
    </>
  );
}
