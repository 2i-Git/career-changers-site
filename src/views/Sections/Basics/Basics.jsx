import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
// import Client from "components/Client";
import ContentItem from "components/ContentItem";

const Basics = ({ className, frontmatter }) => {
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
                {lessons.map(
                    ({ header, content }) => {
                        return <ContentItem key={header} header={header} content={content} />
                    }
                )}

            </Row>
        </PageSection>
    );
}

Basics.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Basics.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Basics;