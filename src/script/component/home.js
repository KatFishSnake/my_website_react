import React from 'react';
import Profile from "../../asset/img/profile.jpg";

class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      items : [],
      loading: false
    };
  }

  componentDidMount() {
    console.log("just mounted");
  }

  render() {
    return (
      <div className="picture">
        <img src={Profile} itemProp="image" alt="Shiny face of mine" />
      </div>
    );
  }
}

export default Home;