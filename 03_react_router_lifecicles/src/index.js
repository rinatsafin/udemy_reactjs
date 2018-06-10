import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

// Components
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to={{ pathname: "/profile" }}>Profile</Link>
        </header>
        <Route path="/" exact component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
