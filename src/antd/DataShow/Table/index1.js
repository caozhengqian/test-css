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
    selectRow = (record) => {
        console.info(record);
        const selectedRowKeys = [...this.state.selectedRowKeys];
        if (selectedRowKeys.indexOf(record.key) >= 0) {
            selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
        } else {
            selectedRowKeys.push(record.key);
        }
        this.setState({ selectedRowKeys });
    }
    onSelectedRowKeysChange = (selected, selectedRows, changeRows) => {
        console.info("onSelectedRowKeysChange=>",selected)
        console.info("onSelectedRowKeysChange=>",selectedRows)
        console.info("onSelectedRowKeysChange=>",changeRows)
    }
    onSelectAll=()=>{

    }
    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            render: text => <a href="#">{text}</a>,
        }, {
            title: 'Age',
            dataIndex: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
        }];

        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '4',
            name: 'Disabled User',
            age: 99,
            address: 'Sidney No. 1 Lake Park',
        }];

        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectedRowKeysChange,
            onSelectAll:this.onSelectAll
        };


        return (
            <div style={{width:"900px"}}>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                    onRow={(record) => ({
                        onClick: () => {
                            this.selectRow(record);
                        },
                    })}
                />
            </div>

        );
    }
}

export default TableA;
