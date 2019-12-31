import React, {Component} from "react";
import {Row, Col} from 'antd';

export class AntdShuXing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:"moren"
        };
    }

    componentDidMount() {

    }
    onChangeText(){
        const {desc} = this.props;
        this.setState({value:desc})
    }
    onChangeTextMove(){
        const {shuxing} = this.props;
        this.setState({value:shuxing})
    }

    render() {
        const{value} = this.state;
        return (
            <span style={{color: "red"}} onMouseOver={()=>this.onChangeText()} onMouseOut={()=>this.onChangeTextMove()}>{value}</span>
        );
    }
}

export default AntdShuXing;
