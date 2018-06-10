import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter, Route, Link } from "react-router-dom";

// Components
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import PostItem from "./components/Post_item";

const App = () => {
  return (
    <MemoryRouter>
      <div>
        <header>
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Posts</Link>
          <br />
          <Link to={{ pathname: "/profile" }}>Profile</Link>
          <hr />
        </header>

        <Route path="/" exact component={Home} />
        <Route path="/posts" exac component={Posts} />
        <Route path="/posts/:id/:username" component={PostItem} />
        <Route path="/profile" component={Profile} />
      </div>
    </MemoryRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
