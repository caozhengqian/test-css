import React, {Component} from "react";
import GongYong from "./GongYong";

export class Life2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.info("Life2======>constructor");
    }
    static getDerivedStateFromProps(){
        console.info("Life2======>getDerivedStateFromProps");
        return "";
    }

    componentDidMount() {
        console.info("Life2======>componentDidMount");

    }

    getSnapshotBeforeUpdate(){
        console.info("Life2======>getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.info("Life2======>componentDidUpdate");
    }
    componentWillUnmount(){
        console.info("Life2======>componentWillUnmount");
    }

    static getDerivedStateFromError(){
        console.info("Life2======>getDerivedStateFromError");
    }
    componentDidCatch(){
        console.info("Life2======>componentDidCatch");
    }

    render() {
        console.info("Life2======>render");
        return (
            <div className="fuwu-zhichi">
                <p>Life2</p>
                <GongYong/>
            </div>

        );
    }
}

export default Life2;
