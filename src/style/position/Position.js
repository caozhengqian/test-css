import React from 'react';
import './position.less'
import  IMG from "./background.png"
function Position() {
    return (
        <div className="content">
            <div >
                <img className="back" src={IMG} alt="edit"/>
            </div>
            <div className="posi"> PositionPositionPositionPositionPositionPosition</div>
        </div>
    );
}

export default Position;