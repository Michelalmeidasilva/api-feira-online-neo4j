import { Model } from './Model';

interface ClientAttributes {
  greeting: string;
  email: string;
  cpf: string;
}

class Client extends Model<Client> {
  greeting: string;
  email: string;
  cpf: string;

  constructor({ greeting, email, cpf }: ClientAttributes) {
    super({ tableName: 'client' });

    this.greeting = greeting;
    this.email = email;
    this.cpf = cpf;
  }
}

export default Client;
