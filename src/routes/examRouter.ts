import * as express from 'express';
import * as http from 'http';

import { ExamController } from '../controllers/examController';
import { environment } from '../../environments/environment';

export class ExamRouter {
  public examController: ExamController = new ExamController();

  public routes(app: express.Application) {

    /**
     * Get all available exams
     */
    // app.route('/exam').get(this.examController.getExam);
    app.route('/exam').get((req, res) => {
      const request = http.request(environment.apiEndpointExam, res => {
        res.on('data', (chunk) => {
          console.log(`BODY: ${chunk}`);
        });
      });
      request.end();
      res.send('exams');
    });
  }
}
