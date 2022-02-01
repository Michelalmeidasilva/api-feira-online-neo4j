import { Model } from './Model';

export class Producer extends Model<Producer> {
  nome: string;
  cnpj: string;

  constructor(nome: string, cnpj: string) {
    super('Producer');

    this.cnpj = cnpj;
    this.nome = nome;
  }
}
