import React from 'react';
import profile_src from "../../../asset/img/profile.jpg";
import Contact from "./contact";

class Profile extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="profile">
        <div className="picture">
          <img src={profile_src} itemProp="image" alt="Shiny face of mine" />
        </div>
        <div className="soc-media">
            <a href={"https://github.com/KatFishSnake"} target="_blank" title="Github profile">
              <i className="pw-github"></i>
            </a>
            <a href={"https://www.behance.net/Relieh"} target="_blank" title="Behance profile">
              <i className="pw-behance"></i>
            </a>
            <a href={"https://twitter.com/Imminent_case"} target="_blank" title="Twitter profile">
              <i className="pw-twitter"></i>
            </a>
            <a href={"https://ca.linkedin.com/in/andrewebdev"} target="_blank" title="LinkedIn profile">
              <i className="pw-linkedin"></i>
            </a>
        </div>
      <Contact email={this.props.email}/>  
      </div>
    );
  }
}

export default Profile;