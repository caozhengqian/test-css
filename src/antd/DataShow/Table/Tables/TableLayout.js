import React, {Component} from "react";
import {Row, Col,Table} from 'antd';
const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];
export class TableLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        const childrenColumnName=["a","b"]
        return (
            <div>
                <Table dataSource={dataSource} columns={columns} childrenColumnName/>
                <Table dataSource={dataSource} columns={columns} tableLayout={"-"}/>
                <Table dataSource={dataSource} columns={columns} tableLayout={"auto"} />
                <Table dataSource={dataSource} columns={columns} tableLayout={"fixed"} bordered />
                <Table dataSource={dataSource} columns={columns} tableLayout={"fixed"} bordered={false} />
            </div>

        );
    }
}

export default TableLayout;
