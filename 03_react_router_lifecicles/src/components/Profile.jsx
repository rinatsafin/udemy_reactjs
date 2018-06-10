import React from "react";
import { Link } from "react-router-dom";

const Profile = props => {
  const redir = () => {
    props.history.push("/");
  };
  return (
    <div>
      <Link to={`${props.match.url}/posts`}>take me to /profile/posts</Link>
      {redir()}
    </div>
  );
};

export default Profile;
