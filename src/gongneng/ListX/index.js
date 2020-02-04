import React, {Component} from "react";
import "./style.less"

export class ListX extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [],
        };
    }

    componentDidMount() {

    }


    render() {
        return (
            <div >
                <div className={"test"} style={{width:"100%",overflowX:"visible"}}>
                    <div className={"testdiv"} style={{width:"300px"}}>a</div>
                    <div style={{width:"300px"}}>a</div>
                    <div style={{width:"300px"}}>a</div>
                    <div style={{width:"300px",float:"left"}}>a</div>
                    <div style={{width:"300px",float:"left"}}>a</div>
                </div>
            </div>
        );
    }
}

export default ListX;
