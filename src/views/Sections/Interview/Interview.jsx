import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const Interview = ({ className, frontmatter }) => {
    if (!frontmatter) {
        return null;
    }

    const { anchor, header: rootHeader, subheader: rootSubHeader, content } = frontmatter;

    return (
        <PageSection className={className} id={anchor} >
            <Row>
                <SectionHeader header={rootHeader} subheader={rootSubHeader} />
            </Row>
            <Row>
                <ReactMarkdown remarkPlugins={[gfm]}>{content}</ReactMarkdown>
            </Row>
        </PageSection>
    );
}

Interview.propTypes = {
    className: PropTypes.string,
    frontmatter: PropTypes.object,
};

Interview.defaultProps = {
    className: null,
    frontmatter: null,
};

export default Interview;