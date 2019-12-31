import React, {Component} from "react";
import {AutoComplete, Input, Row, Col} from 'antd';

function onSelect(value) {
    console.log('onSelect', value);
}

export class AutoCompleteA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            dataSource: ['我的', "你的", "大家的"]
        };
    }

    // onSearch = searchText => {
    //     this.setState({
    //         dataSource: !searchText ? [] : [searchText, searchText.repeat(2), searchText.repeat(3)],
    //     });
    // };
    onChange = value => {
        this.setState({value});
    };

    componentDidMount() {

    }

    render() {
        const {dataSource, value} = this.state;
        return (
            <>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <span style={{color: "red"}}>allowClear</span>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>false</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    onSelect={onSelect}
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={true}
                                    backfill={true}

                                    defaultValue={"aa"}
                                />
                            </Col>
                        </Row>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>true</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    onSelect={onSelect}
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={true}
                                    autoFocus={true}
                                    backfill={true}
                                    defaultValue={"aa"}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>

        );
    }
}

export default AutoCompleteA;
