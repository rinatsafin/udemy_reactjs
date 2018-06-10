import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>Heaer</header>
        <Route path="/" exact component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
