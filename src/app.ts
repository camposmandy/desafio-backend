import * as express from 'express';
import * as bodyParser from 'body-parser';
import { HealthRouter } from './routes/healthRouter';
import { ExamRouter } from './routes/examRouter';

class App {
  public app: express.Application;
  public healthRoute: HealthRouter = new HealthRouter();
  public examRoute: ExamRouter = new ExamRouter();

  constructor() {
    this.app = express();
    this.config();
    this.healthRoute.routes(this.app);
    this.examRoute.routes(this.app);
  }

  private config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
