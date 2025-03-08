// src/api.js
import axios from 'axios';

// Set up base URL for the API (assuming your backend is running on localhost:5000)
const api = axios.create({
  baseURL: 'https://tech-blog-1-t6ez.onrender.com/', // Replace with your backend's base URL
});

// Function to fetch posts
export const getPosts = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

// Function to fetch a single post by id
export const getPostById = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};
