import React, {useRef} from "react";
import ServerFormContainer from "./../server/server_form_container"
export const CreateServerModal = ({showModal, setShowModal}) => {

    const modalRef = useRef();
    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false)
        }
    }

    const modal = (
        <div className="create-server-modal-background" ref={modalRef} onClick={closeModal}>
            <div className="create-server-modal-container">
                <div className="create-server-modal-header">
                    <h1>Create your server</h1>
                    <p>Give your server some personality with a name</p>
                </div>
                <ServerFormContainer showModal={showModal} setShowModal={setShowModal} />
                <div className="create-server-modal-close" onClick={() => setShowModal(prev => !prev)}>
                    <img src={window.x_button} width="16" height="16" />
                </div>
            </div>
        </div>
    )
    return(
        <div>
            {showModal ?  modal : null}
        </div>
    )
}