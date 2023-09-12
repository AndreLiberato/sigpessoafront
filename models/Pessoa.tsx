// import { VNode } from "preact";

export default interface Pessoa {
  id: bigint;
  nome: string;
  sobrenome: string;
  dataNascimento: string;
}

// export default class Pessoa {
//   private _id: bigint;
//   private _nome: string;
//   private _sobrenome: string;
//   private _dataNascimento: Date;

//   constructor(
//     id: bigint,
//     nome: string,
//     sobrenome: string,
//     dataNascimento: Date,
//   ) {
//     this._id = id;
//     this._nome = nome;
//     this._sobrenome = sobrenome;
//     this._dataNascimento = dataNascimento;
//   }

//   static printTableHeader(): VNode {
//     return (
//       <>
//         <th>Nome</th>
//         <th>Sobrenome</th>
//         <th>Data de Nascimento</th>
//       </>
//     );
//   }
//   printTableRow(index: number): VNode {
//     return (
//       <>
//         <tr key={this._id}>
//           <td>{index}</td>
//           <td>{this._nome}</td>
//           <td>{this._sobrenome}</td>
//           <td>{this._dataNascimento.toLocaleDateString()}</td>
//           <td>
//             <a href="">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 class="bi bi-eye"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
//                 <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
//               </svg>
//             </a>
//           </td>
//         </tr>
//       </>
//     );
//   }

//   get id(): bigint {
//     return this._id;
//   }

//   set id(value: bigint) {
//     this._id = value;
//   }

//   get nome(): string {
//     return this._nome;
//   }

//   set nome(value: string) {
//     this._nome = value;
//   }

//   get sobrenome(): string {
//     return this._sobrenome;
//   }

//   set sobrenome(value: string) {
//     this._sobrenome = value;
//   }

//   get dataNascimento(): Date {
//     return this._dataNascimento;
//   }

//   set dataNascimento(value: Date) {
//     this._dataNascimento = value;
//   }

//   toJson() {
//     return JSON.stringify({
//       id: this._id,
//       nome: this._nome,
//       sobrenome: this._sobrenome,
//       dataNascimento: this._dataNascimento.toLocaleDateString(),
//     });
//   }

//   static fromJson(json: string) {
//     const { id, nome, sobrenome, dataNascimento } = JSON.parse(json);
//     return new Pessoa(
//       id,
//       nome,
//       sobrenome,
//       new Date(dataNascimento),
//     );
//   }
// }
