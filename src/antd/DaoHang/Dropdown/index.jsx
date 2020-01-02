import React from 'react';
import _ from "lodash";
import { Button ,Icon,Menu,Dropdown} from 'antd';
class DropdownA  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showData: "",
        };
    }
    componentDidMount(){
        console.info("dropdown")
    }


    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        1st menu item
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        2nd menu item
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        3rd menu item
                    </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div>
                <Dropdown overlay={menu}>

                    <a className="ant-dropdown-link" href="#">
                        Hover me <Icon type="down" />
                    </a>
                </Dropdown>
            </div>
        );
    }
}
export default DropdownA;