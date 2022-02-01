import neo4j from '../database/';

export class Model<T> {
  tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  async query(parameters: string, entityName: string): Promise<T> {
    const result: T = await neo4j.read(parameters);

    return result;
  }

  save() {
    return 'saved';
  }
}
