import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import { HealthRouter } from './routes/healthRouter';
import { ExamRouter } from './routes/examRouter';
import { ClientRouter } from './routes/clientRouter';

class App {
  public app: express.Application;
  public healthRoute: HealthRouter = new HealthRouter();
  public examRoute: ExamRouter = new ExamRouter();
  public clientRoute: ClientRouter = new ClientRouter();
  public mongoUrl: string = 'mongodb://localhost/CRMdb';

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();

    this.healthRoute.routes(this.app);
    this.examRoute.routes(this.app);
    this.clientRoute.routes(this.app);
  }

  private config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup() {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }
}

export default new App().app;
