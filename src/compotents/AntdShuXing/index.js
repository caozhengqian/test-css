import React, {Component} from "react";

export class AntdShuXing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "moren"
        };
    }

    componentDidMount() {
        this.setState({value: this.props.shuxing})
    }

    onChangeText() {
        const {desc} = this.props;
        this.setState({value: desc})
    }

    onChangeTextMove() {
        const {shuxing} = this.props;
        this.setState({value: shuxing})
    }

    render() {
        const {value} = this.state;
        return (
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <span style={{color: "red", cursor: "pointer", wordBreak: "break-all"}}
                      onMouseOver={() => this.onChangeText()} onMouseOut={() => this.onChangeTextMove()}>{value}</span>
                <span >==></span>
            </div>
        );
    }
}

export default AntdShuXing;
