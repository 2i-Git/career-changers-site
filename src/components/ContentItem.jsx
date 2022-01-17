import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

// import { Container } from "react-bootstrap";

const ContentItem = ({ header, content }) => {
    return (
        <div>
            <h3>{header}</h3>
            <ReactMarkdown remarkPlugins={[gfm]}>{content}</ReactMarkdown>
        </div>
    );
};

ContentItem.propTypes = {
    header: PropTypes.string,
    content: PropTypes.string,
};

ContentItem.defaultProps = {
    header: null,
    content: null,
};

export default ContentItem;