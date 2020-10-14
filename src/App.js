import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Nav from "./components/Nav/Nav";
import userService from "./utils/userService";
import Locations from "./pages/Locations/Locations";
import AddLocation from "./pages/AddLocation/AddLocation";
import EditLocation from "./pages/EditLocation/EditLocation";
import * as locationAPI from "./services/locations-api";

class App extends Component {
	state = {
		user: userService.getUser(),
		locations: [],
	};
	async componentDidMount() {
		const locations = await locationAPI.getAll();
		this.setState({ locations });
	}

	handleAddLocation = async (newLocationData) => {
		newLocationData.user = this.state.user;
		const newLocation = await locationAPI.create(newLocationData);
		this.setState(
			(state) => ({
				locations: [...state.locations, newLocation],
			}),
			// Using cb to wait for state to update before rerouting
			() => this.props.history.push("/locations")
		);
	};

	handleDeleteLocation = async (id) => {
		await locationAPI.deleteOne(id);
		this.setState(
			(state) => ({
				// Yay, filter returns a NEW array
				locations: this.state.locations.filter((p) => p._id !== id),
			}),
			() => this.props.history.push("/locations")
		);
	};

	handleUpdateLocation = async (updatedLocationData) => {
		const updatedLocation = await locationAPI.update(updatedLocationData);
		// Using map to replace just the location that was updated
		const newLocationsArray = this.state.locations.map((p) =>
			p._id === updatedLocation._id ? updatedLocation : p
		);
		this.setState(
			{ locations: newLocationsArray },
			// This cb function runs after state is updated
			() => this.props.history.push("/locations")
		);
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
				<Nav user={this.state.user} handleLogout={this.handleLogout} />
				<Switch>
					<Route exact path="/" render={() => <WelcomePage />} />
					<Route
						exact
						path="/signup"
						render={({ history }) => (
							<SignupPage
								history={history}
								handleSignupOrLogin={this.handleSignupOrLogin}
							/>
						)}
					/>
					<Route
						exact
						path="/login"
						render={({ history }) => (
							<LoginPage
								handleSignupOrLogin={this.handleSignupOrLogin}
								history={history}
							/>
						)}
					/>
					<Route
						exact
						path="/locations"
						render={({ history }) => (
							<Locations
								locations={this.state.locations}
								handleDeleteLocation={this.handleDeleteLocation}
								history={history}
							/>
						)}
					/>

					<Route
						exact
						path="/addLocation"
						render={({ history }) => (
							<AddLocation
								handleAddLocation={this.handleAddLocation}
								history={history}
							/>
						)}
					/>
					{/* <Route path="/movies/:id" render={(props) => <Movie {...props} />} /> */}
					<Route
						exact
						path="/editLocation/:id"
						render={({ history, ...props }) => (
							<EditLocation
								{...props}
								locations={this.state.locations}
								handleUpdateLocation={this.handleUpdateLocation}
								history={history}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
