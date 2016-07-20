import React from 'react';

class Footer extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <footer>
        <span className="copy">Copyright &copy; 2016</span>
      </footer>
    );
  }
}

export default Footer;