type PostProps = {
  post: any;
};

export default function Post({ post }: PostProps) {
  return (
    <li key={post.id}>
      <span className="text-gray-600">Time:</span> Some Content
    </li>
  );
}
