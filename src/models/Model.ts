import neo4j from 'src/database/index';

//descobrir o padrao do neo4j para retorno e transformar em uma classe
// depois colocar o dado como a classe parametrizada
// class ResultQuery {
//   ...{
//     data: T
//   }
// }

export class Model<T> {
  tableName: string;

  // resultQuery(data): Promise<T>{
  //   return data;
  // }

  constructor({ tableName = '' }) {
    this.tableName = tableName;
  }

  // async query(parameters: string, entityName: string): Promise<T> {
  //   const result: T = await neo4j.read(parameters);

  //   return result;
  // }

  save() {
    return 'saved';
  }
}
