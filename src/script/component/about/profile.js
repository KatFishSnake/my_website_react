import React from 'react';
import profile_src from "../../../asset/img/profile.jpg";

class Profile extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      email: "Click to email",
      email_link: "#",
    };
  }

  componentDidMount() {
    this.setState({ 
      email: this.props.email.email,
      email_link: this.props.email.email_link,
    });
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
        <div className="contact desktop-only">
            <a className="email" href={this.state.email_link}>
              <i className="pw-paper-plane"></i>
              <span itemProp="email">{this.state.email}</span>
            </a> 
            <a className="location" href={"https://docs.google.com/document/d/1z3j3YSfN7Sclb5zokwfdUmXWPC5bNv6z4MZS_q9uqqU/export?format=pdf"} target="_blank">
              <i className="pw-attachment"></i>
              <span>Download Resume</span>
            </a>
        </div>
      </div>
    );
  }
}

export default Profile;