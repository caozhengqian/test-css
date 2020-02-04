import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import ListX from './ListX';


class GongNeng extends React.PureComponent {

    componentDidMount(){
    }

    render(){
        const {
            match: { path }
        } = this.props;
        return (
            <Switch>
                <Route path={`${path}/listx`} component={ListX} />
            </Switch>
        );
    }
}

export default withRouter(GongNeng)
