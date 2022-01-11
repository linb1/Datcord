import React, {useState} from "react";
import { CreateServerModal } from "../modals/createServerModal";
function CreateServerButton(props){
    // debugger
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    }
    return(
        <div className="create-server-button-container">
            <div className="create-server-button" onClick={openModal}>
                <span>+</span>
            </div>
            <CreateServerModal showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}

export default CreateServerButton;