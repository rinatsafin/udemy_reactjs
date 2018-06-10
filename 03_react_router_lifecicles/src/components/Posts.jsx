import React from "react";
import { Link } from "react-router-dom";

const Posts = props => {
  return (
    <div>
      <Link to="/posts/1">Posts 1</Link>
      <br />
      <Link to="/posts/2">Posts 2</Link>
      <br />
      <Link to="/posts/3">Posts 3</Link>
      <br />
    </div>
  );
};

export default Posts;
