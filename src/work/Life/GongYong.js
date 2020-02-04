import React, {PureComponent} from "react";

export class GongYong extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        console.info("GongYong======>constructor");
    }
    static getDerivedStateFromProps(){
        console.info("GongYong======>getDerivedStateFromProps");
        return "";
    }

    componentDidMount() {
        console.info("GongYong======>componentDidMount");
    }

    getSnapshotBeforeUpdate(){
        console.info("GongYong======>getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.info("GongYong======>componentDidUpdate");
    }
    componentWillUnmount(){
        console.info("GongYong======>componentWillUnmount");
    }

    static getDerivedStateFromError(){
        console.info("GongYong======>getDerivedStateFromError");
    }
    componentDidCatch(){
        console.info("GongYong======>componentDidCatch");
    }

    render() {
        console.info("GongYong======>render");
        return (
            <div className="fuwu-zhichi">
                <p>GongYong</p>
            </div>

        );
    }
}

export default GongYong;
