import { Model } from './Model';

export class Product extends Model<Product> {
  produto: string;
  unidades: string;
  peso: number;
  valor_peso: number;
  litros: number;

  constructor(
    produto: string,
    unidades: string,
    peso: number,
    valor_peso: number,
    litros: number
  ) {
    super({ tableName: 'Product' });

    this.produto = produto;
    this.unidades = unidades;
    this.peso = peso;
    this.valor_peso = valor_peso;
    this.litros = litros;
  }
}
