import React from "react";

class Dm extends React.Component {

    render() {
        return (
            <div className="dm-container">
                <div className="dm-header-container">
                    <div className="dm-header">
                        <div className="dm-title">
                            <img src={window.group} width="20" height="20" />
                            <span>person</span>
                        </div>
                    </div>
                </div>
                <div className="dm-content">
                    <div className="dm-message-container">

                    </div>
                </div>
            </div>
        )
    }

}

export default Dm;