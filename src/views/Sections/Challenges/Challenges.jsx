import React from "react";
import PropTypes from "prop-types";

import { Row, Container } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
// import Client from "components/Client";
import ContentItem from "components/ContentItem";

const Challenges = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, header: rootHeader, subheader: rootSubHeader, lessons } = frontmatter;

    return (
        <PageSection className={className} id={anchor}>
            <Row>
                <SectionHeader header={rootHeader} subheader={rootSubHeader} />
            </Row>
            <Row>
                <Container>
                    {lessons.map(
                        ({ header, content }) => {
                            return <ContentItem key={header} header={header} content={content} />
                        }
                    )}
                </Container>
            </Row>
        </PageSection>
    );
}

Challenges.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Challenges.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Challenges;