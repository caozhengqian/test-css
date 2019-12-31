import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import DataInput from './DataInput';


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

            </Switch>
        );
    }

}

export default withRouter(Antd)
