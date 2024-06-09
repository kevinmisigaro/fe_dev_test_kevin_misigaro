import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { FavoritesContext } from "@/utils/states/FavoritesContext";
import { useContext } from "react";

function Index() {
  const favList = useContext(FavoritesContext);

  if (!favList) {
    throw new Error("An error has occured");
  }

  const { favoritePosts } = favList;

  return (
    <Layout>
      <div className="max-md-3">
        <h1 className="text-2xl font-bold mb-4">Favorite Posts</h1>
        {favoritePosts.length == 0 ? (
          <p>No favorite posts</p>
        ) : (
          favoritePosts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </Layout>
  );
}

export default Index;
