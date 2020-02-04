import React, {Component} from "react";

export class YuanXingLian extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.info( this.makeFunc)
        let myFunc = this.makeFunc();
        myFunc()
    }
    makeFunc() {
        let name = "Mozilla";
        function displayName() {
            console.info(name);
        }
        return displayName;
    }




    render() {
        return (
            <div className="fuwu-zhichi">
                <p>原型链</p>
            </div>

        );
    }
}

export default YuanXingLian;
