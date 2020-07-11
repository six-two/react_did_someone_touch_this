import React from 'react';
import * as C from '../redux/constants';
import GoToScreenButton from '../GoToScreenButton';

export default function PrivacyPolicy() {
  return <div className="screen-privacy">
    <h1>Privacy policy</h1>
    <h2>Data collection</h2>
    <p>
      <span className="bold">I do not collect any information about you. </span>
      This app is designed to work locally and to never send any data to any servers.
      That means that any photos that you take or "upload" will never leave your browser.
      I also do not use local data storage (like cookies), which means that all
      data will be lost when you leave or reload the website.
    </p>
    <h2>Third party libraries</h2>
    <p>
      To realize this website (without spending years developing it) I use some
      third party libraries.
      They handle tasks like accessing the camera / webcam
      and managing the state of the application.
      As far as I can tell none of them send any data back home.
    </p>
    <h2>Hosting provider</h2>
    <p>
      GitHub Pages is used to host this web application.
      Their <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement#github-pages">
        privacy policy
      </a>
      <abbr title="Last checked on July 10, 2020">*</abbr> states:
      <blockquote className="ludwig">
        Please note that GitHub may collect User Personal Information from
        visitors to your GitHub Pages website, including logs of visitor IP addresses,
        to comply with legal obligations, and to maintain the security and
        integrity of the Website and the Service.
      </blockquote>
    </p>
    <h2>Contact</h2>
    <span>
      If you notice any errors in this document or any activity that is not
      in line with this policy, please send an email with your findings to
      <a href="mailto:info@six-two.dev"> info@six-two.dev</a>
    </span>
    <br />
    <GoToScreenButton label="Back" screen={C.SCREEN_MENU} />
  </div >
}
