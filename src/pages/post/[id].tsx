import BackButton from "@/components/BackButton";
import CommentBox from "@/components/CommentBox";
import CommentCard from "@/components/CommentCard";
import Layout from "@/components/Layout";
import LoadingSpinner from "@/components/LoadingSpinner";
import { IComment, IPost } from "@/utils/interfaces";
import { FavoritesContext } from "@/utils/states/FavoritesContext";
import { MyUserProfileContext } from "@/utils/states/MyUserProfileContext";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Index() {
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState<boolean>(true);
  const [commentText, setCommentText] = useState<string>("");
  const [comments, setComments] = useState<IComment[]>([]);
  const router = useRouter();
  const myProfile = useContext(MyUserProfileContext);

  const handleCommentChange = (e: any) => {
    setCommentText(e.target.value);
  };

  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error("Post must be used within a FavoritesProvider");
  }

  const { favoritePosts, toggleFavorite } = favoritesContext;
  const isFavorite = favoritePosts.some(
    (favPost) => favPost.id == parseInt(router.query.id as string)
  );

  const fetchComments = async () => {
    try {
      const response = await axios(`/api/posts/${router.query.id}/comments`);

      if (response) {
        setComments(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPost = async () => {
    try {
      const response = await axios(`/api/posts/${router.query.id}`);

      if (response) {
        setLoading(false);
        setPost(response.data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const submitComment = async () => {
    try {
      console.log(commentText);

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: commentText,
          profileId: myProfile?.personalProfile?.id,
        }),
      };

      const response = await fetch(
        `/api/posts/${router.query.id}/comments`,
        options
      );

      if (response.status == 200) {
        setCommentText("");
        fetchComments();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [router.query.id]);

  return (
    <Layout>
      <div className="max-3-md py-5">
        <BackButton />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="flex flex-row justify-between items-center">
              <h2 className="font-bold text-4xl">{post?.title}</h2>
              {isFavorite ? (
                <FaHeart
                  onClick={() => toggleFavorite(post!)}
                  className="text-2xl text-red-600 cursor-pointer"
                />
              ) : (
                <FaRegHeart
                  onClick={() => toggleFavorite(post!)}
                  className="text-2xl text-red-600 cursor-pointer"
                />
              )}
            </div>
            <p className="mt-10 text-3xl">{post?.body}</p>
            <p className="mt-10 text-3xl">Author: {post?.authorId}</p>
            <div className="mt-6">
              <h5 className="text-2xl">Comments</h5>

              <CommentBox
                str={commentText}
                updateFn={handleCommentChange}
                submitBtn={submitComment}
              />

              <div className="flex flex-col gap-y-2 mt-3">
                {comments.map((comment, index) => (
                  <CommentCard key={index} comment={comment} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default Index;
