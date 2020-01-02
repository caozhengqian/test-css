import React from 'react';
import _ from "lodash";
import { Button } from 'antd';
class ButtonAntd  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showData: "",
        };
    }
    componentDidMount(){

    }


    render() {
        return (
            <div>
                <Button type="primary">Button</Button>
            </div>
        );
    }
}
export default ButtonAntd;