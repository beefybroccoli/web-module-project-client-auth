import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import PageHome from "./component/pageHome";
import PageProfile from "./component/pageProfile";
import Page404 from "./component/page404";
import CompNavigationBar from "./component/compNavigationBar";

export const ContextObject = createContext();
function App() {
  const [stateArray, set_stateArray] = useState([]);
  const [stateNewFriend, set_stateNewFriend] = useState(null);
  const [stateToken, set_stateToken] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (stateNewFriend) {
      const temp_stateNewFriend = stateNewFriend;
      set_stateArray([...stateArray, temp_stateNewFriend]);
      set_stateNewFriend(null);
    }
  }, [stateNewFriend]);

  useEffect(() => {
    if (stateToken) {
      history.push("/profile");
    }
  }, [stateToken]);

  return (
    <div className="App">
      <ContextObject.Provider
        value={{
          stateArray,
          set_stateArray,
          stateNewFriend,
          set_stateNewFriend,
          stateToken,
          set_stateToken,
        }}
      >
        <header>
          <h1>User Authentication With Token</h1>
          <p>stateToken = {stateToken}</p>
          <CompNavigationBar />
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
      </ContextObject.Provider>
    </div>
  );
}

export default App;
