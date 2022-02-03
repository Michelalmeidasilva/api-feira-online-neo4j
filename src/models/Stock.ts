import { Model } from './Model';

export class Stock extends Model<Stock> {
  tipo: string;

  constructor(tipo: string) {
    super('Stock');
    this.tipo = tipo;
  }
}
