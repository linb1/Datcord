import React, { useRef } from "react";
import ChannelFormContainer from "./../channel/channel_form_container"
export const CreateChannelModel = ({ showModal, setShowModal }) => {

    const modalRef = useRef();
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    const modal = (
        <div className="create-channel-background" ref={modalRef} onClick={closeModal}>
            <div className="create-channel-container">
                <div className="create-channel-modal-header">
                    <h1>Create Text Channel</h1>
                </div>
                <ChannelFormContainer showModal={showModal} setShowModal={setShowModal} />
                <div className="create-channel-modal-close" onClick={() => setShowModal(prev => !prev)}>
                    <img src={window.x_button} width="16" height="16" />
                </div>
            </div>
        </div>
    )
    return (
        <div>
            {showModal ? modal : null}
        </div>
    )
}