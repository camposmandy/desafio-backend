import * as express from 'express';
import { ClientController } from '../controllers/clientController';

export class ClientRouter {
  public clientController: ClientController = new ClientController();

  public routes(app: express.Application) {

    /**
     * Get all clients
     */
    app.route('/client').get(this.clientController.getClients);

    /**
     * Create new client
     */
    app.route('/client').post(this.clientController.addNewClient);

    /**
     * Get a single client or Update a client or Delete a client
     */
    app.route('/client/:document')
      .get(this.clientController.getClientWithDoc)
      .put(this.clientController.updateClient)
      .delete(this.clientController.deleteClient);
  }
}
