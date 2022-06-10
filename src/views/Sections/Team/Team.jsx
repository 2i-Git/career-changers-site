import React from "react";
import PropTypes from "prop-types";

import { Row, Col, Button } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Team.scss";

const Team = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    teamMember,
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        {teamMember.map(({ header, ...tmProps }) => (
          <Col sm={4} key={header}>
            <TeamMember header={header} {...tmProps} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <p className="large text-dark">{rootContent}</p>
        </Col>
      </Row>
      <br/>
      <br/>
      <div className="help">
      <Button size="xl" variant="primary" className="text-uppercase" onClick={() => window.open('https://2itesting.com/vacancy/get-to-know-us/', '_blank').focus()}>
        Join Us!
      </Button>
      </div>
    </PageSection>
    
  );
};

Team.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Team.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Team;
