import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Stories({ token }) {
  const [stories, setStories] = useState([]);

  async function getStories() {
    const data = await getDataFromServer(token, "/api/stories");
    console.log(data);
    setStories(data);
  }
  useEffect(() => {
    getStories();
  }, []);

  return (
    <header className="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col justify-center items-center">
          <img
            src={story.user.thumb_url}
            className="rounded-full border-4 border-gray-300 h-14"
            alt={`story posted by ${story.user.username}`}
          />
          <p className="text-xs text-gray-700">{story.user.username}</p>
        </div>
      ))}
    </header>
  );
}
