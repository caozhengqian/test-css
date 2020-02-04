import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import DataInput from './DataInput';
import DataShow from "./DataShow";


class Antd extends React.PureComponent {

    componentDidMount(){
    }

    render(){
        const {
            match: { path }
        } = this.props;
        return (
            <Switch>
                <Route path={`${path}/datainput`} component={DataInput} />
                <Route path={`${path}/datashow`} component={DataShow} />

            </Switch>
        );
    }

}

export default withRouter(Antd)
