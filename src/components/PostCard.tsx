import { IPost } from "@/utils/interfaces";
import Link from "next/link";

function PostCard({ post }: { post: IPost }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link href={`/post/${post.id}`} className="btn btn-primary">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
