import Layout from "@/components/Layout";
import LoadingSpinner from "@/components/LoadingSpinner";
import PostCard from "@/components/PostCard";
import SearchBox from "@/components/SearchBox";
import { IPost } from "@/utils/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchTextChange = (e: any) => {
    setSearchText(e.target.value);
    filterPostsByTitle(e.target.value);
  };

  const fetchPosts = async () => {
    try {
      const response = await axios("/api/posts");

      if (response) {
        setPosts(response.data);
        setFilteredPosts(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const filterPostsByTitle = (searchTerm: string) => {
    if (searchTerm == "") {
      setFilteredPosts(posts);
      return;
    }
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Layout>
      <h3 className="text-3xl font-bold text-center">Cars Posts</h3>

      <div className="flex flex-row justify-center my-4">
        <SearchBox updateFn={handleSearchTextChange} />
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 my-2">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </Layout>
  );
}
