import React, { useState } from "react";
import LogInPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import NewsfeedPage from "./pages/Newsfeed";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(undefined);

  function handleLogIn(userInfo) {
    setLoggedIn(true);
    setUser(userInfo);
  }

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LogInPage loggedIn={loggedIn} handleLogIn={handleLogIn} />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/newsfeed">
          <NewsfeedPage user={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
