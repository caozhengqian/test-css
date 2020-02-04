import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import Closure from './闭包closure';
import YuanXingLian from './原型链';
import Life from './Life';


class Work extends React.PureComponent {

    componentDidMount(){
    }

    render(){
        const {
            match: { path }
        } = this.props;
        return (
            <Switch>
                <Route path={`${path}/closure`} component={Closure} />
                <Route path={`${path}/yuanxinglian`} component={YuanXingLian} />
                <Route path={`${path}/life`} component={Life} />
            </Switch>
        );
    }
}

export default withRouter(Work)
