import { Model } from './Model';

export class Stock extends Model<Stock> {
  tipo: string;

  constructor(tipo: string) {
    super({ tableName: 'Stock' });

    this.tipo = tipo;
  }
}
