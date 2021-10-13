import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import PageHome from "./component/pageHome";
import PageProfile from "./component/pageProfile";
import Page404 from "./component/page404";
function App() {
  const [stateArray, set_stateArray] = useState([]);
  const [stateNewFriend, set_stateNewFriend] = useState(null);

  useEffect(() => {
    if (stateNewFriend) {
      const temp_stateNewFriend = stateNewFriend;
      set_stateArray([...stateArray, temp_stateNewFriend]);
      set_stateNewFriend(null);
    }
  }, [stateNewFriend]);

  return (
    <div className="App">
      <header>
        <h1>User Authentication With Token</h1>
      </header>
      <Switch>
        <Route exact path="/">
          <PageHome
            stateArray={stateArray}
            set_stateNewFriend={set_stateNewFriend}
          />
        </Route>
        <Route path="/profile">
          <PageProfile
            stateArray={stateArray}
            set_stateNewFriend={set_stateNewFriend}
          />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
