import React, {Component} from "react";
import {Row, Col} from 'antd';
import "./style.less";

export class AntdShuXing extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        const {shuxing , desc} = this.props
        return (
            <span style={{color: "red"}}>{shuxing}</span>
        );
    }
}

export default AntdShuXing;
