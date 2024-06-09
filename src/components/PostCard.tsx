import { IPost } from "@/utils/interfaces";

function PostCard({ post }: { post: IPost }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Read more</button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
