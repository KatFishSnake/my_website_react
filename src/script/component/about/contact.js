import React from 'react';

class Contact extends React.Component {
  
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
        <div className="contact">
            <a className="email" href={this.state.email_link}>
              <i className="pw-paper-plane"></i>
              <span itemProp="email">{this.state.email}</span>
            </a> 
            <a className="location" href={"https://docs.google.com/document/d/1z3j3YSfN7Sclb5zokwfdUmXWPC5bNv6z4MZS_q9uqqU/export?format=pdf"} target="_blank">
              <i className="pw-attachment"></i>
              <span>Download Resume</span>
            </a>
        </div>
    );
  }
}

export default Contact;