import mongoose from "mongoose";

// Post Config
const PostSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const PostModel = mongoose.model("Post", PostSchema);

// Post Actions
export const getPosts = () => PostModel.find();
export const getPostById = (id: string) => PostModel.findById(id);
export const createPost = (values: Record<string, any>) =>
  new PostModel(values).save().then((post) => post.toObject());
export const deletePostById = (id: string) =>
  PostModel.findOneAndDelete({ _id: id });
export const updatePostById = (id: string, values: Record<string, any>) =>
  PostModel.findByIdAndUpdate(id, values);
