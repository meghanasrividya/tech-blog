// src/components/PostList.jsx
import React, { useEffect, useState } from 'react';
import { getPosts } from '../api';
import PostCard from './PostCard';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default PostList;
