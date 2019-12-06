import React from 'react';
import _ from "lodash"
class Null extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showData: "",
        };
    }
    componentDidMount(){

        const data = {a:{b:{c:{d:"dd"}}}}
        console.info(_.at(data,"a.g.f"));
        //1111111111111111111111111111111111111111111111111
         //1、没有g，但是不会报错，值为undefine，界面显示为空
         this.setState({showData:data.a.g})//undefine

        //22222222222222222222222222222222222222222222222222
        //2、TypeError: Cannot read property 'f' of undefined
        // this.setState({showData:data.a.g.f})//没有g，导致取不到f，报错

        //33333333333333333333333333333333333333333333333333
        //[undefind]
        this.setState({showData:_.at(data,"a.g.f")},function () {
            console.info(this.state.showData)
        })

        //44444444444444444444444444444444444444444444444444
        let abc;//undefined
         if(abc){
             console.info(abc)
             console.info("abc,true")
         }else{
             //走false这里
             console.info(abc)
             console.info("abc,false")
         }

        //555555555555555555555555555555555555555
        let abc5;//undefined
        if(abc5){
            console.info(abc5)
            console.info("abc5,true")
        }else{
            //走false这里
            console.info(abc5)
            console.info("abc5,false")
        }
    }

    render() {
        return (
            <div>
                {this.state.showData}
            </div>
        );
    }
}
export default Null;