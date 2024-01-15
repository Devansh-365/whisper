import Post from "./post";

export default function Posts() {
  return (
    <div className="scrollbar w-full flex-1 overflow-y-scroll scroll-smooth">
      <ul className="space-y-2">
        {[
          1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
          3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
        ].map((post, i) => (
          <Post key={i} post />
        ))}
      </ul>
    </div>
  );
}
