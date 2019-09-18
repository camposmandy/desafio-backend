import { Request, Response } from 'express';

export class HealthController {
  public getHealth(req: Request, res: Response) {
    res.status(200).send({
      status: 'UP',
    });
  }
}
