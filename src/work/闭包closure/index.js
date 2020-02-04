import React, {Component} from "react";

export class Closure extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
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
                <p>函数以及创建该函数的词法环境组合而成。这个环境包含了这个闭包创建时所能访问的所有局部变量。</p>
            </div>

        );
    }
}

export default Closure;
