import { useEffect, useState } from "react";
import Post from "./post";
import { getPosts } from "../api/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  console.log("POSTS: ", posts);

  return (
    <div className="scrollbar w-full flex-1 overflow-y-scroll scroll-smooth">
      <ul className="space-y-2">
        {posts.map((post, i) => (
          <Post key={i} post={post} />
        ))}
      </ul>
    </div>
  );
}
