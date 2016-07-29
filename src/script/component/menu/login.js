import React from "react";
import { withRouter } from 'react-router'

import auth from "../../shared/auth";

class Login extends React.Component {

	constructor(props) {
		super(props);
	}

    /**
     * Sanitize text string
     */
    sanitizeText(str) {
        return str.toString().replace(/[^\w\s\-\d]/gi, '').trim();
    }

    onSubmit (e, context) {
        e.preventDefault()

        let data = {
            username: this.sanitizeText(this.refs.loginName.value),
            password: this.refs.loginPass.value
        };

        alert(data.username + " " + data.password)

        const self = this;
        auth.login(data, (res) => {
            if (res.status) {
                self.props.router.push("apps");

                self.props.login({name: data.username});
            }
        });
    }

    render () {
    	return (
    		<div className="login-form">
    			<button onClick={this.props.setActivate}> Log in </button>

                <div className="form-container">
                    <form>
                        <input type="text" ref="loginName" className="precede-input" name="username" autoComplete="off" placeholder="Username" required />
                        <input type="password" ref="loginPass" className="following-input" name="password" autoComplete="off" placeholder="Password" required />
                        <button type="submit" value="LoginInfo" onClick={(e) => this.onSubmit(e)}>
                            <i className="pw-arrow-right" />
                        </button>
                    </form>
                </div>
    		</div>
    	);
    }
}

export default withRouter(Login);