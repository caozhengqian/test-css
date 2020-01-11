import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import Closure from './闭包closure';


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

            </Switch>
        );
    }

}

export default withRouter(Work)
