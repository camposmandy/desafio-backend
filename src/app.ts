import * as express from 'express';
import * as bodyParser from 'body-parser';
import { HealthRouter } from './routes/healthRouter';

class App {
  public app: express.Application;
  public healthRoute: HealthRouter = new HealthRouter();

  constructor() {
    this.app = express();
    this.config();
    this.healthRoute.routes(this.app);
  }

  private config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
