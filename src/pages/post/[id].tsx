import Layout from "@/components/Layout";
import { IPost } from "@/utils/interfaces";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Index() {
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

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

  useEffect(() => {
    fetchPost();
  }, [router.query.id]);

  return (
    <Layout>
      <div className="max-3-md py-5">
        <h2 className="font-bold text-4xl">{post?.title}</h2>
        <p className="mt-10 text-3xl">{post?.body}</p>
        <div>
          <p className="mt-10 text-3xl">Author: {post?.authorId}</p>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
