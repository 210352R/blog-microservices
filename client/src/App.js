import React from "react";
import PostCreate from "./PostCreate.js";
import PostList from "./PostList.js";

export default () => {
  return (
    <div className="container">
      <h1>Create Post !!!!!!!!!!!!!!! </h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
