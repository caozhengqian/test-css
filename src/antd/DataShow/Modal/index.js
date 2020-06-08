import React, {Component} from "react";
import { Modal } from 'antd';
export class ModalA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saveVisible: false,
        };
    }

    componentDidMount() {

    }
    onCheck(){
        this.setState({saveVisible:true});
    }
    onCancel(){
        this.setState({saveVisible:false});
    }
    render() {
        const {saveVisible} = this.state;

        return (
            <div style={{width:"900px"}}>
                <a onClick={()=>this.onCheck()} className="cankao-yangben-div">
                    弹出
                </a>
                <Modal
                    title="参考样本"
                    visible={saveVisible}
                    onOk={()=>{}}
                    onCancel={this.handleCancel}
                >
                    <img style={{width:"100%"}}src={toUrl} />
                </Modal>
            </div>

        );
    }
}

export default TableA;
