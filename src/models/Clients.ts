import { Model } from './Model';

export class Client extends Model<Client> {
  greeting: string;
  email: string;
  cpf: string;

  constructor(message: string, email: string, cpf: string) {
    super('client');

    this.greeting = message;
    this.email = email;
    this.cpf = cpf;
  }
}
