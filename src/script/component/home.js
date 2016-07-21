import React from 'react';
import { Link } from 'react-router';
import cn from "classnames";
import _ from "lodash";

import Footer from "./footer";
import Menu from "./menu/menu";
import About from "./about/about";

class Home extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          expanded: false,
          mobile: false,
          viewWidth: this.getViewWidth()
      };

      this.handleResize = _.debounce(this.handleResize, 200);
  }

  componentDidMount() {
      // Was about to display https://imgflip.com/i/16y9za here
      // But console doesn't render images anymore :(
      console.log("%cWell, hello there!", "font-weight:bold; color: grey; font-size:16pt");
      console.log("%cIf you are interested in anything related to this website, its source is publicly available here: https://github.com/KatFishSnake/profile_website", "font-weight:bold; color: grey; font-size:16pt");
      
      if (this.getViewWidth() < 640) {
        console.log("doc is smaller then 640");
      }

      // Listen for resize
      window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount () {

    // Remove listener on scope destroy
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize (e) {
    console.log(this.state);
    this.setState({viewWidth: this.getViewWidth()});
  }

  getViewWidth(e) {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return w;
  }

  toggleMenu() {
      this.setState({
          expanded: !this.state.expanded
      });
  }

  render() {
    let smClasses = cn({
        "flex": true,
        "with-menu": this.state.expanded,
        "no-menu": !this.state.expanded
    });

    //TODO:  REPAIR SWIPER https://github.com/joakimbeng/react-swiper

    return (
      <div className={smClasses}>
        <Menu toggleMenu={() => this.toggleMenu()} />
        <div className="wrapper">
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;