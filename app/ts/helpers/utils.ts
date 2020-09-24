import { Imprimivel } from "../models/index";

export function print(...objects: Imprimivel[]): void {
  objects.forEach(object => object.toString());
}