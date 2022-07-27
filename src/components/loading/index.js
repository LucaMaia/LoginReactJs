import React from 'react';
import "./styles.css"

import ReactLoading from 'react-loading';
import {Modal} from 'react-bootstrap';

function Loading(props) {
    let showModal = props.showModal || false;

    return (

        <Modal
            size="sm"
            show={showModal}
            className="modal"
            style={{ margin: "600px auto", textAlign: "center"}}
        >
            <ReactLoading className='modal-loading' type="spinningBubbles" color="#071d41"/>
            Carregando, aguarde
        </Modal>
    )
}

export default Loading;
