import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import Background from './background/backgroundImg';
import DisplayFlex from "./displayFlex/DisplayFlex";
import Position from "./position/Position";


class Style extends React.PureComponent {

    componentDidMount(){
    }

    render(){
        const {
            match: { path }
        } = this.props;
        return (
            <Switch>
                <Route path={`${path}/background`} component={Background} />
                <Route path={`${path}/displayflex`} component={DisplayFlex} />
                <Route path={`${path}/position`} component={Position} />

            </Switch>
        );
    }

}

export default withRouter(Style)
