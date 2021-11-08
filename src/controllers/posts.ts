/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "getted posts "
  });
};

// getting a single post
const getPost = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "getted post "
  });
};

// updating a post
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  // return response
  return res.status(200).json({
    message: "updated post "
  });
};

// deleting a post
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  // return response
  return res.status(200).json({
    message: "deleted post"
  });
};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
  // return response
  return res.status(200).json({
    message: "added post "
  });
};

export default { getPosts, getPost, updatePost, deletePost, addPost };
