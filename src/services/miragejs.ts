import { createServer } from "miragejs";

export function makeServer() {
  const server = createServer({
    routes() {
      this.namespace = 'api';

      this.get('/transactions', () => {
        return [
          {
            id: 1,
            title: 'Transactions'
          }
        ]
      })
    }
  });

  return server;
}