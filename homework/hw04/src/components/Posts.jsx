import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Post from "./Post";

export default function Posts({ token }) {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  async function getPosts() {
    const data = await getDataFromServer(token, "/api/posts");
    console.log(data);
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {/* TODO: output all of the posts: {posts.length} */}
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      <br />
    </div>
  );
}
