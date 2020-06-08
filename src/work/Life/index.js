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
        /**
         * 两个作用
         * 通过给 this.state 赋值对象来初始化内部 state。
         *  为事件处理函数绑定实例
         **/
        super(props);
        this.state = {
            test:false,
            first:"aaa"
        };
        console.info("Life======>constructor");
    }
    static getDerivedStateFromProps(){
        //详见Life2
        //使用key={this.state.first} 重新创建子组件。
        console.info("Life======>getDerivedStateFromProps");
        return "";
    }

    fetch0(){
        fetch("http://localhost:8080/0",{
            headers:{
                'Content-Type':'application/json;charset=UTF-8'
            },
        }).then(res=>res.json()).then(json=> {
            console.log("返回的值==》",json);
            this.setState({first:json.time});
        }).catch(error=>{
            console.info(error);
        });
    }

    fetch3(){
        fetch("http://localhost:8080/3",{
            headers:{
                'Content-Type':'application/json;charset=UTF-8'
            },
        }).then(res=>res.json()).then(json=> {
            console.log("返回的值==》",json);
            this.setState({first:json.time});
        }).catch(error=>{
            console.info(error);
        });
    }

    fetch6(){
        fetch("http://localhost:8080/6",{
            headers:{
                'Content-Type':'application/json;charset=UTF-8'
            },
        }).then(res=>res.json()).then(json=> {
            console.log("返回的值==》",json);
            this.setState({first:json.time});
        }).catch(error=>{
            console.info(error);
        });
    }

    componentDidMount() {
        //Life2，子组件在did中setState,也要等所有组件did完之后再更新
        console.info("Life======>componentDidMount");
        // this.fetch0();
        // this.fetch3();
        this.fetch6();

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
                <Life2 toValue={this.state.first} />
                <Life1 toValue={this.state.first}/>

            </div>

        );
    }
}

export default Life;
