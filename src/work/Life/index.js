import React, {Component} from "react";
import Life1 from "./Life1";
import Life2 from "./Life2";
/**
 * 1、父组件更新，两个子组件+公用组件的周期方法；
 * 2、setState同样的值组件会不会更新；
 * 3、setState同时更新两个，和分开更新两个值的区别
 * 4、组件取消接口请求，路由取消接口请求
 */

export class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test:false,
            first:"aaa"
        };
        console.info("Life======>constructor");
    }
    static getDerivedStateFromProps(){
        console.info("Life======>getDerivedStateFromProps");
        return "";
    }

    componentDidMount() {
        console.info("Life======>componentDidMount");
        setTimeout(()=>{
            console.info("定时器执行了");
            let test = false;
            this.setState({test:test})//
            this.setState({first:"ccc"})
        },1000)
    }
    // shouldComponentUpdate(){
    //     //
    //     console.info("Life======>shouldComponentUpdate");
    //     return false;
    // }
    getSnapshotBeforeUpdate(){
        console.info("Life======>getSnapshotBeforeUpdate");
        return null;
    }
     componentDidUpdate(){
        console.info("Life======>componentDidUpdate");

    }
    componentWillUnmount(){
        console.info("Life======>componentWillUnmount");
    }

    static getDerivedStateFromError(){
        console.info("Life======>getDerivedStateFromError");
    }
    componentDidCatch(){
        console.info("Life======>componentDidCatch");
    }

    render() {
        console.info("Life======>render");
        return (
            <div className="fuwu-zhichi">
                <p>Life</p>
                <Life1 toValue={this.state.first}/>
                <Life2/>
            </div>

        );
    }
}

export default Life;
