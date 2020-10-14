import React, { Component } from "react";
// import { Link } from "react-router-dom";

class AddLocationPhoto extends Component {
	state = {
		invalidForm: false,
		// Refer to LocationListItem to see how Location is being passed via the <Link>
		formData: {
			url: "",
		},
	};

	formRef = React.createRef();
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleAddLocationPhoto(this.state.formData);
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
			<form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
				<input type="file" name="url" onChange={this.handleChange} />
				<button type="submit">
					{/* <button type="submit" className="btn" disabled={this.state.invalidForm}> */}
					Add Location Photo
				</button>
			</form>
		);
	}
}
export default AddLocationPhoto;
