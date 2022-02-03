import Client from './Client';

describe('Test classes', function () {
  test('responds to create a new Client class', () => {
    const client = new Client({
      greeting: 'aeaeae',
      cpf: '04051133069',
      email: 'email@example.com'
    });

    expect(client.cpf).toEqual('0405113069');
  });
});
