import React, {Component} from "react";
import GongYong from "./GongYong";

export class Life2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test:"test",
            fir:props.toValue//2、只加载一次，不会更新，永远是父组件第一次的值aaa
        };
        console.info("Life2======>constructor");
    }
    static getDerivedStateFromProps(nextProps,state){
        //1、可以使用memoize 记录上次的值
        //3、会更新state的 fir。 但是不建议使用，在父组件使用key={this.state.first}。
        // if(nextProps.toValue !== state.fir){
        //     return{
        //         fir:nextProps.toValue
        //     }
        // }

        console.info("Life2======>getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        // this.fetch0();
        // this.setState({a:"b"})
        console.info("Life2======>componentDidMount");

    }
    shouldComponentUpdate(){
        console.info("Life2======>shouldComponentUpdate");
        return true;//默认true更新
    }

    getSnapshotBeforeUpdate(){
        console.info(this.state);
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
    fetch0(){
        fetch("http://localhost:8080/0",{
            headers:{
                'Content-Type':'application/json;charset=UTF-8'
            },
        }).then(res=>res.json()).then(json=> {
            console.log("返回的值==》",json);
            this.setState({time:json.time});
        }).catch(error=>{
            console.info(error);
        });
    }
    render() {
        console.info("Life2======>render");
        return (
            <div className="fuwu-zhichi">
                <p>Life2</p>
                <p>{this.state.fir}</p>
                <GongYong/>
            </div>

        );
    }
}

export default Life2;
