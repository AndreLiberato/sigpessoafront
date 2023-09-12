import Pessoa from "../models/Pessoa.tsx";

export async function getAll(): Promise<Pessoa[] | undefined> {
  const request = async () => {
    try {
      const response = await fetch("http://localhost:8080/pessoa/all", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Erro ao obter os dados.");
      }

      const data = await response.json();
      console.log(data);
      const list: Array<Pessoa> = [];
      data.array.forEach((obj: object) => {
        const json = JSON.stringify(obj);
        list.push(Pessoa.fromJson(json));
      });
      return list;
    } catch (erro) {
      console.error("Ocorreu um erro:", erro);
    }
  };
  return await request();
}

export async function getOne(id: string) {
  const request = async () => {
    try {
      const response = await fetch(`http://localhost:8080/pessoa/get/${id}`, {
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
  };

  const pessoa: Pessoa = await request();

  return pessoa;
}
