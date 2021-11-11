/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";
import neo4j from "../database/";

// getting all posts
const getMovies = async (req: Request, res: Response, next: NextFunction) => {
  // neo4j.read();
  return res.status(200).json({
    message: "getted posts "
  });
};

// getting a single post
const getMovie = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "getted post "
  });
};

// updating a post
const updateMovie = async (req: Request, res: Response, next: NextFunction) => {
  // return response
  return res.status(200).json({
    message: "updated post "
  });
};

// deleting a post
const deleteMovie = async (req: Request, res: Response, next: NextFunction) => {
  // return response
  return res.status(200).json({
    message: "deleted post"
  });
};

// adding a post
const addMovie = async (req: Request, res: Response, next: NextFunction) => {
  // return response
  return res.status(200).json({
    message: "added post "
  });
};

export default { getMovies, getMovie, updateMovie, deleteMovie, addMovie };
