import React, {PureComponent} from "react";
import GongYong from "./GongYong";

export class Life1 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        console.info("Life1======>constructor");
    }
    static getDerivedStateFromProps(nextProps){
        console.info(nextProps)
        console.info("Life1======>getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.info(this.props.toValue)
        console.info("Life1======>componentDidMount");
    }

    getSnapshotBeforeUpdate(){
        console.info("Life1======>getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.info("Life1======>componentDidUpdate");
    }
    componentWillUnmount(){
        console.info("Life1======>componentWillUnmount");
    }

    static getDerivedStateFromError(){
        console.info("Life1======>getDerivedStateFromError");
    }
    componentDidCatch(){
        console.info("Life1======>componentDidCatch");
    }

    render() {
        console.info("Life1======>render");
        return (
            <div className="fuwu-zhichi">
                <p>Life1</p>
                <GongYong/>
            </div>

        );
    }
}

export default Life1;
