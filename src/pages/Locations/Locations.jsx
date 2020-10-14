import React from "react";
import { NavLink } from "react-router-dom";
import LocationListItem from "../../components/LocationListItem/LocationListItem";

const Locations = (props) => {
	return (
		<>
			<h1>Locations</h1>
			<NavLink to="/addLocation">Add a Location</NavLink>
			<div>
				{props.locations.map((location) => (
					<LocationListItem
						location={location}
						handleDeletelocation={props.handleDeletelocation}
						key={location._id}
					/>
				))}
			</div>
		</>
	);
};

export default Locations;
