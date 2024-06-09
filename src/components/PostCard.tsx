import { shortenString } from "@/utils/functions";
import { IPost } from "@/utils/interfaces";
import Link from "next/link";

function PostCard({ post }: { post: IPost }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{shortenString(post.body)}</p>
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
