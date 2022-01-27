import React from "react";
import PropTypes from "prop-types";
import { Row, Modal } from "react-bootstrap";

const InfoModal = ({ className, closeModal, show, title, text }) => {

    // add in handle click to pass click back up? Maybe not needed

    return (
        <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{text}</Modal.Body>
        </Modal>
    )
};

InfoModal.propTypes = {
    className: PropTypes.string,
    closeModal: PropTypes.func,
    show: PropTypes.bool,
    title: PropTypes.string,
    text: PropTypes.string
};

InfoModal.defaultProps = {
    className: null,
    closeModal: null,
    show: false,
    title: null,
    text: null
};

export default InfoModal;