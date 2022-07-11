import { Alimento } from "../alimento/alimento.model";

export class Colaborador {
    id!: string;
    nome!: string;
    cpf!: string;
    alimento!: Array<Alimento>;

}