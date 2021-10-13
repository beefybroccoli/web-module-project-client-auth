import "./App.css";
import React, { useHistory } from "react";
import { Switch, Route } from "react-router-dom";
import PageHome from "./component/pageHome";
import PageProfile from "./component/pageProfile";
import Page404 from "./component/page404";
function App() {
  return (
    <div className="App">
      <header>
        <h1>User Authentication With Token</h1>
      </header>
      <Switch>
        <Route exact path="/">
          <PageHome />
        </Route>
        <Route path="/profile">
          <PageProfile />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
