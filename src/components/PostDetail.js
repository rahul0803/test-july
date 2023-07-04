import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const { posts } = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id.toString() === id);

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div>
      <h2>Post Detail</h2>
      <div>
        <h3>Title: {post.title}</h3>
        <p>Body: {post.body}</p>
        <p>User ID: {post.userId}</p>
      </div>
    </div>
  );
};

export default PostDetail;
