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
        //1、没有g，但是不会报错
        this.setState({showData:data.a.g},function () {
            console.info(data.a.g)
        })

        //2、TypeError: Cannot read property 'f' of undefined
        // this.setState({showData:data.a.g.f})//没有g，导致取不到f，报错
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