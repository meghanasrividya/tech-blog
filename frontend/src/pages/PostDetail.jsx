// src/pages/PostDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://your-api.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.log(error));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <PostDetailContainer>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </PostDetailContainer>
  );
};

const PostDetailContainer = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

export default PostDetail;
