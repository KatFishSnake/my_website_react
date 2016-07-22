import React from "react";

class Signup extends React.Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
    		<div className="signup-form">
				<button onClick={this.props.setActivate}> Sign Up </button>
    		</div>
		);
	}
}

export default Signup;