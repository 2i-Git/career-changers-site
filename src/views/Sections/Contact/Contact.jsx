import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import Icon from "components/Icon";
import PageSection from "components/PageSection";
import Image from "components/Image";

const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header, subheader, content, telephone, email } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="mt-0">{header}</h2>
          <hr className="divider my-4" />
          <p className="text-dark mb-4" id="about-2i">{subheader}</p>
        </Col>
      </Row>
      <Row className="d-flex aligns-items-center">
        <Col />
        <Col>
          <Image
            id="contactlogo"
            className="md-auto align-middle"
            fileName="logo-icon-large.png"
            alt="2i logo"
            layout="fixed"
          />
        </Col>
        <Col />
      </Row>
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <p id="about-contact"  className="text-dark mb-5">{content}</p>
        </Col>
      </Row>
      <Row>
        <Col lg={4} className="ml-auto text-center">
          <Icon iconName="PhoneIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={`tel:${telephone}`}>
            {telephone}
          </a>
        </Col>
        <Col lg={4} className="mr-auto text-center">
          <Icon iconName="EnvelopIcon" size="3x" className="text-muted mb-3" />
          <a className="d-block" href={`mailto:${email}`}>
            {email}
          </a>
        </Col>
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
