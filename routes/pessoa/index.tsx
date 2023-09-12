import { VNode } from "preact";
import Header from "../../components/Header.tsx";
import ViewList from "../../islands/ViewList.tsx";
import Pessoa from "../../models/Pessoa.tsx";
import { Eye, PenSquare, Trash } from "lucide-preact";

export default async function Home() {
  async function request() {
    try {
      const response = await fetch("http://localhost:8080/pessoa/all", {
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

  const data = await request();

  function printTableRow(pessoa: Pessoa, index: number): VNode {
    const baseURL = "http://localhost:8000/pessoa";
    const urlToShow = `${baseURL}/show/${pessoa.id}`;
    const urlToEdit = `${baseURL}/edit/${pessoa.id}`;
    const urlToDelete = `${baseURL}/delete/${pessoa.id}`;

    return (
      <tr key={pessoa.id}>
        <td>{index}</td>
        <td>{pessoa.nome}</td>
        <td>{pessoa.sobrenome}</td>
        <td>{new Date(pessoa.dataNascimento).toLocaleDateString()}</td>
        <td>
          <a href={urlToShow}>
            <Eye class="w-5 h-5" />
          </a>
          <a href={urlToEdit}>
            <PenSquare class="w-5 h-5" />
          </a>
          <a href={urlToDelete}>
            <Trash class="w-5 h-5" />
          </a>
        </td>
      </tr>
    );
  }

  function printTableHeader(): VNode {
    return (
      <>
        <th>Nome</th>
        <th>Sobrenome</th>
        <th>Data de Nascimento</th>
      </>
    );
  }

  return (
    <>
      <Header active="/pessoa" />
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <ViewList
            list={data}
            printTableHeaderFunction={printTableHeader}
            printTableRowFunction={printTableRow}
          />
        </div>
      </div>
    </>
  );
}
