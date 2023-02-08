import React, {Component} from "react";

class Invocation extends Component {
    render() {
        return <p>Professor {this.props.teacher} was invoked he teaches {this.props.subject}</p>
    }
}

export default Invocation;