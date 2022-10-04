/** source/controllers/posts.ts */
import { Request, Response } from 'express';

// getting all movies
const getAll = async (req: Request, res: Response) => {
  try {
    return res.sendStatus(204);
  } catch (e) {
    return res.sendStatus(500);
  }
};

// getting a single post
const get = async (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'getted post '
  });
};

// updating a post
const update = async (req: Request, res: Response) => {
  // return response
  return res.status(200).json({
    message: 'updated post '
  });
};

// deleting a post
const destroy = async (req: Request, res: Response) => {
  return res.status(200).json({
    message: 'deleted post'
  });
};

// adding a post
const create = async (req: Request, res: Response) => {
  // return response
  // return res.status(200).json({
  //   message: 'added post '
  // });

  return res.status(200).json({
    message: 'haha'
  });
};

export default { get, getAll, update, destroy, create };
