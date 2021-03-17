import { NavLink, Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import { Posts } from "./Posts";
import { Post } from "./Post";
import { NewPost } from "./NewPost";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/new">New Post</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={Posts} />
        <Route path="/new" component={NewPost} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
