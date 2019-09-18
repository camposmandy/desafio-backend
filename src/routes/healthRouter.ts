import { HealthController } from '../controllers/healthController';
import * as express from 'express';

export class HealthRouter {
  public healthController: HealthController = new HealthController();

  public routes(app: express.Application) {

    /**
     * Verify application status
     */
    app.route('/health').get(this.healthController.getHealth);
  }
}
