/* eslint react/no-children-prop: 0 */
/* eslint react/no-unstable-nested-components: 0 */

import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import "./ContentItem.scss";



const ContentItem = ({ header, content }) => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <Row className="chapter-header">
                <Col lg={1}>
                    <button variant="primary" type="button" className="btn btn-primary" onClick={() => setShow((s) => !s)}> {show ? 'hide' : 'Show'} </button>
                </Col>
                <Col>
                    <h2>{header}</h2>
                </Col>

            </Row>

            <div style={{ display: show ? 'block' : 'none' }}>
                <ReactMarkdown children={content} remarkPlugins={[gfm]} components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, '')}
                                style={dark}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }} />
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