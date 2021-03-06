import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, NavLink, Switch } from "react-router-dom";

// Components
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import PostItem from "./components/Post_item";
import LifeCycles from "./components/Life_cycles";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavLink to="/life">LifeCycles</NavLink>
          <br />
          <Link to="/">Home</Link>
          <br />
          <NavLink
            to="/posts"
            activeStyle={{ color: "red" }}
            activeClassName="selected"
          >
            Posts
          </NavLink>
          <br />
          <NavLink
            to={{ pathname: "/profile" }}
            activeStyle={{ color: "red" }}
            activeClassName="selected"
          >
            Profile
          </NavLink>
          <hr />
        </header>
        <Switch>
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Home} />
          <Route path="/life" component={LifeCycles} />
          <Route component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
