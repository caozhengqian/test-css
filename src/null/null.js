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
        let abc5 = null;//undefined
        if(abc5){
            console.info(abc5)
            console.info("abc5,true")
        }else{
            //走false这里
            console.info(abc5)
            console.info("abc5,false")
        }

        //666666666666666666666666666666666666666666666
        let abc6 = "";//undefined
        if(abc6){
            console.info(abc6)
            console.info("abc6,true")
        }else{
            //走false这里
            console.info(abc6)
            console.info("abc6,false")
        }
        //7777777777777777777777777777777777777777
        let abc7 = 0;//undefined
        if(abc7){
            console.info(abc7)
            console.info("abc7,true")
        }else{
            //走false这里
            console.info(abc7)
            console.info("abc7,false")
        }
        //88888888888888888888888888888888888
        let abc8 = "0";//undefined
        if(abc8){
            console.info(abc8)
            console.info("abc8,true")
        }else{
            //走false这里
            console.info(abc8)
            console.info("abc8,false")
        }
        //9999999999999999999999
        let abc9 = "false";//undefined
        if(abc9){
            console.info(abc9)
            console.info("abc9,true")
        }else{
            //走false这里
            console.info(abc9)
            console.info("abc9,false")
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