import React from 'react';
import { Link } from 'react-router';
import Footer from "./footer";

import About from "./about/about";

class Home extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
      // Was about to display https://imgflip.com/i/16y9za here
      // But console doesn't render images anymore :(
      console.log("%cWell, hello there!", "font-weight:bold; color: grey; font-size:16pt");
      console.log("%cIf you are interested in anything related to this website, its source is publicly available here: https://github.com/KatFishSnake/profile_website", "font-weight:bold; color: grey; font-size:16pt");
  }

  render() {
    return (
      <div className="wrapper">
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Home;