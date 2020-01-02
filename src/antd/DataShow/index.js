import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import TableA from "./Table";

export class DataShow extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        const {
            match: { path }
        } = this.props;
        return (
            <Switch>
                <Route path={`${path}/table`} component={TableA} />
            </Switch>
        );
    }
}

export default withRouter(DataShow);
