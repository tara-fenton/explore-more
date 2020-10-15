import React from "react";
import { Link } from "react-router-dom";
// import './LocationDetails.css';

function LocationDetails({
	// loc,
	handleDeleteLocation,
	props,
	// handleAddlPhoto,
}) {
	return (
		<div>
			<div>
				<h2>loc details</h2>
				<div>
					<b>{props.loc.name}</b>
				</div>
				{/*<div>Description: {loc.description}</div>
				<div>
					lat: {loc.lat} long: {loc.lng}
				</div>
				<div>Notes: {loc.notes}</div> */}
			</div>
			{/* <div>
				{/* <Link
					to={{
						pathname: `/addLocationPhoto/${location._id}`,
						state: { location },
						handleAddLocationPhoto: handleAddLocationPhoto(location._id),
					}}>
					Photos
				</Link> */}
			{/* <Link
					// className="btn btn-xs btn-info"
					to={{
						pathname: `/editLocation/${loc._id}`,
						state: { loc },
					}}>
					EDIT
				</Link>
				<button onClick={() => handleDeleteLocation(loc._id)}>DELETE</button>
			</div> */}
		</div>
	);
}

export default LocationDetails;
