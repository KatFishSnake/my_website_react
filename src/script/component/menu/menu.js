import React from "react";
import cn from "classnames";

import Login from "./login";
import Signup from "./signup";

import "../../../style/side-menu.scss";
import box from "../../../asset/img/box.gif";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ln_active: false,
            sp_active: false,
            logged_in: false,
            profile: {
                name: "User"
            }
        };
    }

    setLoginActive() {
        this.setState({
            ln_active: true,
            sp_active: false
        });
    }

    setSignupActive() {
        this.setState({
            ln_active: false,
            sp_active: true
        });
    }

    logIn (info) {

        this.setState({
            logged_in: true,
            profile: info
        });
    }

    logOut () {
        console.log("logging out");


        this.setState({
            logged_in: false,
        });
    }

    render() {
        let smClasses = cn({
            "side-menu": true,
            "ln-active": this.state.ln_active,
            "sp-active": this.state.sp_active,
            "logged-in": this.state.logged_in
        });

        return (
    		<div className={smClasses}>
                <div className="mobile-menu" onClick={ (e) => this.props.toggleMenu(e) }>
                    <span />
                </div>
                <div className="menu-container">
                    { this.state.logged_in ?
                    <div className="inner-menu">
                        <div className="profile-pic" >
                            <i className="pw-profile-pic" />
                        </div>
                        <div className="profile-des">
                            <h3> Hello {this.state.profile.name}!</h3>
                            <span  onClick={(e) => this.logOut(e)}>
                                Logout
                            </span> 
                        </div>
                    </div>

                    :

                    <div className="inner-menu">
                        <img className="box" src={box} alt="Box absurd" />
                        <h3> Hello, please log in or sign up.</h3>
                        <Login setActivate={ () => this.setLoginActive() } login={ (info) => this.logIn(info) }/>
                        <Signup setActivate={ () => this.setSignupActive() } login={ (info) => this.logIn(info) }/>
                    </div>
                    }
                </div>
    		</div>
        );
    }
}

export default Menu;
