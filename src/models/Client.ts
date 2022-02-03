import { Model } from './Model';

interface ClientAttributes {
  name: string;
  email: string;
  cpf: string;
}

class Client extends Model<Client> {
  name: string;
  email: string;
  cpf: string;

  constructor({ name, email, cpf }: ClientAttributes) {
    super({ tableName: 'client' });

    this.name = name;
    this.email = email;
    this.cpf = cpf;
  }
}

export default Client;
