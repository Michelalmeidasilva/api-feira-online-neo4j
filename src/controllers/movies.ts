/** source/controllers/posts.ts */
import { Request, Response } from "express";

import neo4j from "../database/";
import { Movie } from "../models/Movie";

// getting all movies
const getMovies = async (req: Request, res: Response) => {
  try {
    const result = await neo4j.read("MATCH (movies:Movie)  RETURN movies");

    const movies: Movie[] = result.records.map((row) => {
      const { properties, identity } = row.get("movies");

      return {
        ...properties,
        id: identity.low,
        released: properties.released.low
      };
    });

    if (movies) {
      return res?.status(200).json({
        data: movies
      });
    }

    return res.sendStatus(204);
  } catch (e) {
    return res.sendStatus(500);
  }
};

// getting a single post
const getMovie = async (req: Request, res: Response) => {
  return res.status(200).json({
    message: "getted post "
  });
};

// updating a post
const updateMovie = async (req: Request, res: Response) => {
  // return response
  return res.status(200).json({
    message: "updated post "
  });
};

// deleting a post
const deleteMovie = async (req: Request, res: Response) => {
  // return response
  return res.status(200).json({
    message: "deleted post"
  });
};

// adding a post
const addMovie = async (req: Request, res: Response) => {
  // return response
  return res.status(200).json({
    message: "added post "
  });
};

export default { getMovies, getMovie, updateMovie, deleteMovie, addMovie };
