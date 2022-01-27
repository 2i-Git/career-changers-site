import React, { useState } from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";
import InfoModal from "components/InfoModal";

const Footer = ({ frontmatter }) => {

  const [showPrivacy, setShowPrivacy] = useState(false);
  const handleClosePrivacy = () => setShowPrivacy(false);
  const handleOpenPrivacy = () => setShowPrivacy(true);

  const [showTerms, setShowTerms] = useState(false);
  const handleCloseTerms = () => setShowTerms(false);
  const handleOpenTerms = () => setShowTerms(true);

  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    privacyHref,
    privacyText,
    termsHref,
    termsText,
    social: { facebook, github, linkedin, medium, twitter },
  } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="align-items-center text-center">
          <Col lg={5} className="text-lg-left">
            {copyright}
          </Col>
          <Col lg={3} className="my-3 my-lg-0">
            {twitter ? <SocialIcons.Twitter userName={twitter} /> : null}
            {facebook ? <SocialIcons.Facebook userName={facebook} /> : null}
            {linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null}
            {github ? <SocialIcons.Github userName={github} /> : null}
            {medium ? <SocialIcons.Medium userName={medium} /> : null}
          </Col>
          <Col lg={4} className="text-lg-right">
            <a className="mr-3" href={privacyHref} onClick={handleOpenPrivacy}>
              {privacyText}
            </a>
            <InfoModal className="dhj" closeModal={handleClosePrivacy} show={showPrivacy} text="Dfkdd" title="Privacy Policy" />

            <a href={termsHref} onClick={handleOpenTerms}>{termsText}</a>
            <InfoModal className="dhj" closeModal={handleCloseTerms} show={showTerms} text="Dfkdd" title="Terms of Use" />

          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
