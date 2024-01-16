import express from "express";
import {
  createPost,
  deletePostById,
  getPostById,
  getPosts,
} from "../models/post.model";

export const getAllPosts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const posts = await getPosts();
    return res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const createdPost = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { content } = req.body;
    const user: any = req.user;
    if (!content) {
      return res.sendStatus(400);
    }
    const post = await createPost({
      content,
      user: user._id,
    });
    return res.status(200).json(post).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deletePost = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const deletedPost = await deletePostById(id);
    return res.json(deletedPost);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updatePost = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    if (!content) {
      return res.sendStatus(400);
    }
    const post = await getPostById(id);
    post.content = content;
    await post.save();
    return res.status(200).json(post).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
