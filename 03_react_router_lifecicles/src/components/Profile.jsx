import React from "react";
import { Link, Redirect } from "react-router-dom";

const Profile = props => {
  const redir = () => {
    return <Redirect to="/" />;
  };
  return (
    <div>
      <Link to={`${props.match.url}/posts`}>take me to /profile/posts</Link>
      {redir()}
    </div>
  );
};

export default Profile;
