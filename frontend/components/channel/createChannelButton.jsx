import React, { useState } from "react";
import { CreateChannelModel } from "../modals/createChannelModal";
// import { CreateServerModal } from "../modals/createServerModal";
function CreateChannelButton(props) {
    // debugger
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    }
    return (
        <div className="cc-button-container">
            <div className="cc-button" onClick={openModal}>
                <span>+</span>
            </div>
            <CreateChannelModel showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}

export default CreateChannelButton;