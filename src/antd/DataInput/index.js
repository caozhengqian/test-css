import React,{Component} from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import AutoCompleteA from "./AutoComplete";

export class DataInput extends Component {
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
                <Route path={`${path}/autocomplete`} component={AutoCompleteA} />
            </Switch>
        );
    }
}

export default withRouter(DataInput);
