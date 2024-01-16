import moment from "moment";

type PostProps = {
  post: any;
};

export default function Post({ post }: PostProps) {
  return (
    <li key={post?._id}>
      <span className="text-gray-600">
        {moment(post?.createdAt).format("DD-MMM-YYYY HH:mm:ss")}:
      </span>{" "}
      {post?.content}
    </li>
  );
}
