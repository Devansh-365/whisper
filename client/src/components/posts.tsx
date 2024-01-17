import { useEffect, useState } from "react";
import Post from "./post";
import { getPosts } from "../api/posts";
import Skeleton from "./skeleton";

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
        {posts.length > 0
          ? posts.map((post, i) => <Post key={i} post={post} />)
          : Array(20)
              .fill(0)
              .map((_, i) => <Skeleton className="h-6 w-full" key={i} />)}
      </ul>
    </div>
  );
}
