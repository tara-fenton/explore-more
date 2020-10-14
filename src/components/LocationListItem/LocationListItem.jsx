import React from "react";
import { Link } from "react-router-dom";
// import './LocationListItem.css';

function LocationListItem({
	location,
	handleDeleteLocation,
	handleAddLocationPhoto,
}) {
	return (
		<div>
			<div>
				<div>
					<b>{location.name}</b>
				</div>
				<div>Description: {location.description}</div>
				<div>
					lat: {location.lat} long: {location.lng}
				</div>
				<div>Notes: {location.notes}</div>
			</div>
			<div>
				<Link
					to={{
						pathname: `/addLocationPhoto/${location._id}`,
						state: { location },
						handleAddLocationPhoto: handleAddLocationPhoto(location._id),
					}}>
					Photos
				</Link>
				<Link
					// className="btn btn-xs btn-info"
					to={{
						pathname: `/editLocation/${location._id}`,
						state: { location },
					}}>
					EDIT
				</Link>
				<button onClick={() => handleDeleteLocation(location._id)}>
					DELETE
				</button>
			</div>
		</div>
	);
}

export default LocationListItem;
