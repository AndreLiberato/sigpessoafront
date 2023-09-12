import { VNode } from "preact";
import Pessoa from "../models/Pessoa.tsx";

interface ListItem {
  list: Array<Pessoa> | undefined;
}

interface PrintableObject {
  printTableHeaderFunction: () => VNode;
  printTableRowFunction: (pessoa: Pessoa, index: number) => VNode;
}

export default function ViewList({
  list,
  printTableHeaderFunction,
  printTableRowFunction,
}: ListItem & PrintableObject) {
  return (
    <div>
      <h1>Lista de Itens</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            {printTableHeaderFunction()}
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {list!.map((item, index) => printTableRowFunction(item, ++index))}
        </tbody>
      </table>
    </div>
  );
}
