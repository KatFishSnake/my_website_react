import React from 'react';

import Profile from "./profile";
import Description from "./description";

import about_style from "../../../style/about.scss";

class About extends React.Component {
  constructor(props) {
    super(props);

    let e = this.spamSecure();
    this.state = {
        email: e,
        email_link: "mailto:" + e + "?Subject=Hello%20"
    };
  }

  /**
   * Secure email from spam bots
   *
   * @return {String} Decoded email
   */
  spamSecure() {
    // Email obfuscator script 2.1 by Tim Williams, University of Arizona
    // Random encryption key feature by Andrew Moulden, Site Engineering Ltd
    // This code is freeware provided these four comment lines remain intact
    // A wizard to generate this code is at http://www.jottings.com/obfuscator/
    let coded = "6dWNI.n9xd@rhJ79W.h7o",
        key = "3w6tGFp97Kx2cDYNIykWlPSQbO8jmXL4shfiR0TnUJAa51VquoBzvHgMreECdZ",
        shift = coded.length,
        email = "",
        i,
        ltr;

    for (i = 0; i < coded.length; i++) {
        let ltr
        if (key.indexOf(coded.charAt(i)) == -1) {
            ltr = coded.charAt(i)
            email += (ltr)
        } else {
            ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
            email += (key.charAt(ltr))
        }
    }

    return email;
  }

  render() {
    return (
      <section className="about">
        <Profile email={this.state}/>
        <Description />
      </section>
    );
  }
}

export default About;