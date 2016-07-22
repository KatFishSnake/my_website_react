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
            sp_active: false
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

    render() {
        let smClasses = cn({
            "side-menu": true,
            "ln-active": this.state.ln_active,
            "sp-active": this.state.sp_active
        });

        return (
    		<div className={smClasses}>
                <div className="mobile-menu" onClick={ (e) => this.props.toggleMenu(e) }>
                    <span />
                </div>
                <div className="menu-container">
                    <div className="inner-menu">
                        <img className="box" src={box} alt="Box absurd" />
                        <h3> Hello, please log in or sign up.</h3>
                        
                        <Login setActivate={ () => this.setLoginActive() } />
                        <Signup setActivate={ () => this.setSignupActive() } />
                    </div>
                </div>
    		</div>
        );
    }
}

export default Menu;
