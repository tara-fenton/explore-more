import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" render={() => <WelcomePage />} />
        <Route exact path="/login" render={() => <LoginPage />} />
        <Route exact path="/signup" render={() => <SignupPage />} />
      </Switch>
    </div>
  );
}

export default App;
