import * as http from 'http';

import { Request, Response } from 'express';
import { environment } from '../../environments/environment';

export class ExamController {

  /**
   * Get all available exams
   */
  public getExam(req: Request, res: Response) {
    const request = http.request(environment.apiEndpointExam, res => {
      res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
      });
    });
    request.end();
    res.send('exams');
  }
}
