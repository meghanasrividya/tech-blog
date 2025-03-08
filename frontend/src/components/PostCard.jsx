
// src/components/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link to={`/post/${post.id}`}>Read More</Link>
    </div>
  );
};

export default PostCard;
