import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../server-requests";

export default function Profile({ token }) {
  const [profile, setProfile] = useState({});

  async function getProfile() {
    const data = await getDataFromServer(token, "/api/profile");
    console.log(data);
    setProfile(data);
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <header className="flex gap-4 items-center">
      <img src={profile.thumb_url} className="rounded-full w-16" alt={`${profile.username}'s profile picture`} />
      <h2 className="font-Comfortaa font-bold text-2xl">{profile.username}</h2>
    </header>
  );
}
