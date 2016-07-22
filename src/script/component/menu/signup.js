import React from "react";

class Signup extends React.Component {

	constructor (props) {
		super(props);
	}

    /**
     * Sanitize text string
     */
    sanitizeText(str) {
        return str.toString().replace(/[^\w\s\-\d]/gi, '');
    }

    onSubmit (e) {
        e.preventDefault()

        let data = {
            username: this.sanitizeText(this.refs.signupName.value),
            password: this.refs.signupPass.value,
            secret: this.refs.signupKey.value
        };

        console.log(data);
        alert(data.username + " " + data.password + " " + data.secret)
    }

	render () {
		return (
    		<div className="signup-form">
				<button onClick={this.props.setActivate}> Sign Up </button>

                <div className="form-container">
                    <form>
                        <input type="text" ref="signupName" className="precede-input" name="username" autoComplete="off" placeholder="Username" required />
                        <input type="password" ref="signupPass" className="precede-input" name="password" autoComplete="off" placeholder="Password" required />
                        <input type="password" ref="signupKey" className="following-input" name="secret" autoComplete="off" placeholder="Admin key" required />
                        <button type="submit" value="SignupInfo" onClick={(e) => this.onSubmit(e)}>
                            <i className="pw-arrow-right" />
                        </button>
                    </form>
                </div>
    		</div>
		);
	}
}

export default Signup;