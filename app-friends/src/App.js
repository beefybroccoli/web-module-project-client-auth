import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import PageHome from "./component/pageHome";
import PageProfile from "./component/pageProfile";
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
        <Route
          render={() => {
            return (
              <div>
                <h2>Page 404</h2>
              </div>
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
