import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import clsx from "clsx";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import ShowHideButton from "./ShowHideButton";




const ContentItem = ({ header, content }) => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <Row>
                <Col lg={1}>
                    <button variant="primary" type="button" className="btn btn-primary" onClick={() => setShow((s) => !s)}> {show ? 'hide' : 'Show'} </button>
                </Col>
                <Col>
                    <h2>{header}</h2>
                </Col>

            </Row>

            <div style={{ display: show ? 'block' : 'none' }}>
                <ReactMarkdown remarkPlugins={[gfm]}>{content}</ReactMarkdown>
                <p />
            </div>
        </div >
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