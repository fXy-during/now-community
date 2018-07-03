import React, { PureComponent } from "react";

// import Report from './report';
import "./index.scss";

export default class Content extends PureComponent {
    render() {
        return <div id="content-container">{this.props.children}</div>;
    }
}
