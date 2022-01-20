import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import ServiceItem from "components/ServiceItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

import "./service.scss"

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, services } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="text-center">
        {services.map((service) => (
          <Col md={4} key={service.header}>
            <ServiceItem {...service} />
          </Col>
        ))}
      </Row>
      <Row>
        <div className="intro-block">
          <h5 className="text-center"> Completing a coding challenge is typically the first interview step at a tech company. They are also pretty fun.</h5>
          <p className="text-justify">The purpose behind this guide is to help give you the skills you need to start solving simple challenges and think like a developer. You might like to do this in order to find a new job, or even just out of curiosity</p>
          <p className="text-justify">What this is not, is a comprehensive guide to programming, software development or web development. The intention is to light a spark of curiosity, and then to guide you on to bigger and better things! That may be developing apps as a hobby, introducing code to your current job, or it may be a career with 2i.</p>
        </div>
      </Row>
    </PageSection>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;
