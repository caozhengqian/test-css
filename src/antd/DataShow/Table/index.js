import React, {Component} from "react";
import {Row, Col,Table,Divider,Tag} from 'antd';
import TableLayout from "./Tables/TableLayout";
export class TableA extends Component {
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
            <div style={{width:"900px"}}>
                <TableLayout/>
            </div>

        );
    }
}

export default TableA;
