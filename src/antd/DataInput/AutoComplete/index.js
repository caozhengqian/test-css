import React, {Component} from "react";
import {AutoComplete, Input, Row, Col} from 'antd';
import AntdShuXing from "../../../compotents/AntdShuXing"
const { Option, OptGroup } = AutoComplete;
const dataSources = [
    {
        title: 'Libraries',
        children: [
            {
                title: 'AntDesign',
                count: 10000,
            },
            {
                title: 'AntDesign UI',
                count: 10600,
            },
        ],
    },
    {
        title: 'Solutions',
        children: [
            {
                title: 'AntDesign UI',
                count: 60100,
            },
            {
                title: 'AntDesign',
                count: 30010,
            },
        ],
    },
    {
        title: 'Articles',
        children: [
            {
                title: 'AntDesign design language',
                count: 100000,
            },
        ],
    },
];
function renderTitle(title) {
    return (
        <span>
      {title}
            <a
                style={{ float: 'right' }}
                href="https://www.google.com/search?q=antd"
                target="_blank"
                rel="noopener noreferrer"
            >
        more
      </a>
    </span>
    );
}
export class AutoCompleteA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            dataSource: ['我的', "你的", "大家的"]
        };
    }

    onChange = value => {
        this.setState({value});
    };
    onChanges = value => {
        console.info("onChange=>", value);
    };
    onSearchs = value => {
        console.info("onSearch=>", value);
    };
    onSelects = (value,option)=>{
        console.info("onSelects的value=>",value);
        console.info("onSelects的option=>",option);
    }
    onFocuss = ()=>{
        console.info("onFocuss执行了");
    }
    onDropdownVisibleChanges = open=>{
        console.info("onDropdownVisibleChanges==>",open);
    }
    componentDidMount() {

    }

    render() {
        const {dataSource} = this.state;
        const optionss = dataSources
            .map(group => (
                <OptGroup key={group.title} label={renderTitle(group.title)}>
                    {group.children.map(opt => (
                        <Option key={opt.title} value={opt.title}>
                            {opt.title}
                            <span className="certain-search-item-count">{opt.count} people</span>
                        </Option>
                    ))}
                </OptGroup>
            ))
            .concat([
                <Option disabled key="all" className="show-all">
                    <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
                        View all results
                    </a>
                </Option>,
            ]);
        return (
            <div style={{paddingBottom:"100px"}}>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"allowClear"} desc={"支持清除, 单选模式有效"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>true</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={true}
                                    defaultValue={"aa"}
                                />
                            </Col>
                        </Row>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>false</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={true}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"autoFocus"} desc={"自动获取焦点"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>true</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    autoFocus={true}
                                    defaultValue={"aa"}
                                />
                            </Col>
                        </Row>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>false</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={true}
                                    autoFocus={false}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"backfill"} desc={"上下键时，文本框内自动显示内容"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>true</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                />
                            </Col>
                        </Row>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>false</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={true}
                                    autoFocus={false}
                                    backfill={false}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"children(Input)"} desc={"自定义输入框Input"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>示例</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                >
                                    <Input.TextArea
                                        style={{height: 50}}
                                    />
                                </AutoComplete>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"children(AutoComplete.Option，可disable)"}
                                     desc={"不使用datasource，直接使用AutoComplete.Option"}/>
                    </Col>
                    <Col span={20}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>示例</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                >
                                    <AutoComplete.Option key={1} disabled>
                                        第一个选项
                                    </AutoComplete.Option>
                                </AutoComplete>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4} offset={5}>
                        <p>1、必须有key</p>
                        <span>2、option必须是文本，不能使用标签"span"否则</span>
                        <AutoComplete
                            dataSource={dataSource}
                            style={{width: 200}}
                            
                            onSearch={this.onSearch}
                            placeholder="input here"
                            allowClear={false}
                            autoFocus={false}
                            backfill={true}
                        >
                            <AutoComplete.Option key={1}>
                                <span>第一个选项</span>
                            </AutoComplete.Option>
                        </AutoComplete>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"dropdownMenuStyle"} desc={"dropdown 菜单自定义样式"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>示例</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                    dropdownMenuStyle={{backgroundColor: "red", marginTop: "10px"}}
                                />
                            </Col>
                        </Row>

                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"defaultActiveFirstOption"} desc={"是否默认高亮第一个选项"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>true</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                    defaultActiveFirstOption={true}
                                />
                            </Col>
                        </Row>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>false</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={true}
                                    autoFocus={false}
                                    backfill={false}
                                    defaultActiveFirstOption={false}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"defaultValue"} desc={"默认显示的条数"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>示例</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                    defaultValue={dataSource[0]}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"disabled"} desc={"是否禁用"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>true</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                    disabled={true}
                                />
                            </Col>
                        </Row>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>false</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={true}
                                    autoFocus={false}
                                    backfill={false}
                                    disabled={false}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"filterOption"} desc={"每次输入/删除都会触发循环遍历一次"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>示例</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    
                                    onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                    filterOption={(inputValue, option) =>
                                        option.props.children.indexOf(inputValue) != -1
                                    }
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"getPopupContainer"}
                                     desc={"菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>示例</span>
                            </Col>
                            <Col>
                                <div style={{margin: 10, overflow: 'scroll', height: "200px"}}>
                                    <div style={{
                                        padding: "150px",
                                        height: "1000px",
                                        background: '#eee',
                                        position: 'relative'
                                    }} id="area">
                                        <AutoComplete
                                            dataSource={dataSource}
                                            style={{width: 200}}
                                            
                                            onSearch={this.onSearch}
                                            placeholder="input here"
                                            allowClear={false}
                                            autoFocus={false}
                                            backfill={true}
                                            getPopupContainer={()=>document.getElementById("area")}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"onChange"} desc={"选中菜单回车时，value输入/删除时，调用此函数"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>示例</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    // 
                                    // onSearch={this.onSearch}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                    onChange={this.onChanges}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"onSearch"} desc={"输入文本调用"}/>
                    </Col>
                    <Col span={20}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>示例</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    onSearch={this.onSearchs}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4} offset={5}>
                        我，会触发三次w wo 我
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"onSelect"} desc={"选中回车/单击，value和option"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>示例</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    onSelect={this.onSelects}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"open"} desc={"自动打开菜单，无法关闭"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>true</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                    defaultOpen={false}
                                    onFocus={this.onFocuss}
                                />
                            </Col>
                        </Row>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>false</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    placeholder="input here"
                                    allowClear={true}
                                    autoFocus={false}
                                    backfill={false}
                                    defaultOpen={false}
                                    onFocus={this.onFocuss}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"onDropdownVisibleChanges"} desc={"打开/关闭菜单触发"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>true</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={dataSource}
                                    style={{width: 200}}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                    onFocus={this.onFocuss}
                                    onDropdownVisibleChange={this.onDropdownVisibleChanges}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"显示带二级的菜单（已知菜单）"} desc={"显示带二级的菜单"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>示例</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={optionss}
                                    style={{width: 200}}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" align="top" style={{marginTop: "10px"}}>
                    <Col span={3} offset={1}>
                        <AntdShuXing shuxing={"显示带二级的菜单（未知菜单，未开发）"} desc={"显示带二级的菜单"}/>
                    </Col>
                    <Col span={18}>
                        <Row type="flex" align="middle">
                            <Col span={1}>
                                <span style={{color: "blue", marginLeft: "5px"}}>示例</span>
                            </Col>
                            <Col>
                                <AutoComplete
                                    dataSource={optionss}
                                    style={{width: 200}}
                                    placeholder="input here"
                                    allowClear={false}
                                    autoFocus={false}
                                    backfill={true}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AutoCompleteA;
