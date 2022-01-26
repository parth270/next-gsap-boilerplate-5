import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <p>
        The HIGHWAY Magazine design system for digital publishing is a project
        of HIGHWYA Magazine and its publisher, Ademas Studio. This website is
        hosted by the publisher and is intended for internal design reference
        and experimentation and organization for future digital development.
      </p>
      <p>
        For updates up the magazine sign up for the newsletter or follow on
        Instagram or Twitter. A new issue is carefully in the works.
      </p>
      <p>
        If you would like to contact us, you can use the contact form on the
        studio website and or email HIGHWAY magazine directly by using the email
        listed on the actual magazine wesite.
      </p>
    </div>
  );
};

export default Footer;
