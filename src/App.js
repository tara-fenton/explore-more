import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Nav from "./components/Nav/Nav";
import userService from "./utils/userService";

class App extends Component {
  state = {
    user: userService.getUser(),
  };
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <Nav user={this.state.user} handleLogout={this.handleLogout}/>
        <Switch>
          <Route exact path="/" render={() => <WelcomePage />} />
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              handleSignupOrLogin={this.handleSignupOrLogin}
              history={history}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
