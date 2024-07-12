import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../Components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/v1/post/getPosts");
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-6 px-3 p-28 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-serif font-bold">Welcome to <span className="text-white p-2 rounded-tl-3xl rounded-br-3xl bg-gradient-to-r from-blue-500 to-purple-500">Alpha Dev</span></h1>
        <p className="text-gray-500 text-xs sm:text-2xl">
          Here you'll find a variety of articles and tutorials on topics such as
          web development, software engineering, and programming languages.
        </p>
        <Link
          to="/search"
          className="text-sm sm:text-xl text-teal-500 font-semibold hover:underline"
        >
          View all posts
        </Link>
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to="/search"
              className="text-sm sm:text-xl text-teal-500 font-semibold hover:underline"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
