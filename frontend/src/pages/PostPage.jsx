// src/pages/PostPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../api';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPostById(id);
      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
