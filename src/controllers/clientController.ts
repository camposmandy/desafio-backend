import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { clientSchema } from '../models/clientModel';

const CLIENT = mongoose.model('Client', clientSchema);

export class ClientController {

  /**
   * Find all clients on database
   * @param req Request
   * @param res Response
   */
  public getClients(req: Request, res: Response) {
    CLIENT.find({}, (err, contact) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(contact);
    });
  }

   /**
   * Find client by document number on database
   * @param req Request
   * @param res Response
   */
  public getClientWithDoc(req: Request, res: Response) {
    CLIENT.findById(req.params.id, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  /**
   * Save client on database
   * @param req Request
   * @param res Response
   */
  public addNewClient(req: Request, res: Response) {
    const newClient = new CLIENT(req.body);

    newClient.save((err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  /**
   * Update client on database
   * @param req Request
   * @param res Response
   */
  public updateClient(req: Request, res: Response) {
    CLIENT.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  /**
   * Delete client on database
   * @param req Request
   * @param res Response
   */
  public deleteClient(req: Request, res: Response) {
    CLIENT.remove({ _id: req.params.id }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted client!' });
    });
  }
}
