import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import ButtonAntd from "./ButtonAntd";
import Dropdown from "./Dropdown";
import Menu from "./Menu";
import Form from "./Form";

class Antd extends React.PureComponent {

    componentDidMount(){
        console.info("this.props",this.props)
    }

    render(){
        const {
            match: { path }
        } = this.props;
        return (
            <Switch>
                <Route path={`${path}/button`} component={ButtonAntd} />
                <Route path={`${path}/dropdown`} component={Dropdown} />
                <Route path={`${path}/menu`} component={Menu} />
                <Route path={`${path}/form`} component={Form} />
            </Switch>
        );
    }

}

export default withRouter(Antd)
