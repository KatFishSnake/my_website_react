import React from "react";
import cn from "classnames";

import "../../../style/side-menu.scss";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ln_active: false,
            sp_active: false
        };
    }

    checkMobile() {
        this.setState({
            mobile: !this.state.expanded
        });
    }

    render() {
        let smClasses = cn({
            "side-menu": true,
            "ln_active": this.state.ln_active,
            "sp_active": this.state.sp_active
        });

        return (
    		<div className={smClasses}>
                <div className="mobile-menu" onClick={ (e) => this.props.toggleMenu(e) }>
                    <span />
                </div>
                <div className="menu-container">
                    <div className="inner-menu">
                        <h3> Hello, please log in or sign up.</h3>
                        <button> Log in </button>
                        <button> Sign Up </button>
                    </div>
                </div>
    		</div>
        );
    }
}

export default Menu;
