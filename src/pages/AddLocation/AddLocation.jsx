import React, { Component } from "react";

class AddLocationPage extends Component {
	state = {
		invalidForm: true,
		formData: {
			name: "",
			description: "",
			lat: "",
			lng: "",
			notes: "",
		},
	};

	formRef = React.createRef();

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleAddLocation(this.state.formData);
	};

	handleChange = (e) => {
		const formData = {
			...this.state.formData,
			[e.target.name]: e.target.value,
		};
		this.setState({
			formData,
			invalidForm: !this.formRef.current.checkValidity(),
		});
	};

	render() {
		return (
			<>
				<h1>Add Location</h1>
				<form
					ref={this.formRef}
					autoComplete="off"
					onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Name (required)</label>
						<input
							className="form-control"
							name="name"
							value={this.state.formData.name}
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label>Description (required)</label>
						<input
							className="form-control"
							name="description"
							value={this.state.formData.description}
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label>Latitude</label>
						<input
							className="form-control"
							name="lat"
							value={this.state.formData.lat}
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Longitude</label>
						<input
							className="form-control"
							name="lng"
							value={this.state.formData.lng}
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Notes</label>
						<input
							className="form-control"
							name="notes"
							value={this.state.formData.notes}
							onChange={this.handleChange}
						/>
					</div>
					<button
						type="submit"
						className="btn"
						disabled={this.state.invalidForm}>
						ADD LOCATION
					</button>
				</form>
			</>
		);
	}
}
export default AddLocationPage;
