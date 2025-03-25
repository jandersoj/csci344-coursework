import "./Profile.css";
import React from "react";

export default function Profile({ name, picture }) {
  return (
    <section className="profile">
      <h1>{name}</h1>
      <img src={picture} alt={name} />
    </section>
  );
}
