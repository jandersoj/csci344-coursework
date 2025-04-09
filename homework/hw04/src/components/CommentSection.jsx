import { useState } from "react";
import React from "react";

export default function CommentSection({ post }) {
  return post.comments.map((comment) => (
    <p className="text-sm mb-3" key={comment.id}>
      <strong>{comment.user.username} </strong>
      {comment.text}
    </p>
  ));
}
// and then ig one would add the functionality of a more button
// to expand the section, and ofc the commenting itself
