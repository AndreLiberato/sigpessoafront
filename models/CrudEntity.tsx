import { VNode } from "preact";

export default interface CrudEntity {
  printTableHeader(): VNode;
  printTableRow(index: number): VNode;
}
