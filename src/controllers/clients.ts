/** source/controllers/posts.ts */
import { Request, Response } from 'express';

import neo4j from '../database/';
import Client from 'src/models/Client';

// getting all movies
const getClients = async (req: Request, res: Response) => {
  try {
    // const result = await neo4j.read('MATCH (Clients:Client)  RETURN Clients');

    // const Clients: Client[] = result.records.map(row => {
    //   const { properties, identity } = row.get('Clients');

    //   return {
    //     ...properties,
    //     id: identity.low,
    //     released: properties.released.low
    //   };
    // });

    // if (Clients) {
    //   return res?.status(200).json({
    //     data: Clientsw
    //   });
    // }
    return res.sendStatus(204);
  } catch (e) {
    return res.sendStatus(500);
  }
};

// getting a single post
const getClient = async (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'getted post '
  });
};

// updating a post
const updateClient = async (req: Request, res: Response) => {
  // return response
  return res.status(200).json({
    message: 'updated post '
  });
};

// deleting a post
const deleteClient = async (req: Request, res: Response) => {
  // return response
  return res.status(200).json({
    message: 'deleted post'
  });
};

// adding a post
const addClient = async (req: Request, res: Response) => {
  // return response
  // return res.status(200).json({
  //   message: 'added post '
  // });
  return res.status(200).json({
    message: 'haha'
  });
  res.json(req.body);
};

export default { getClients, getClient, updateClient, deleteClient, addClient };
