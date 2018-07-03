import React, { PureComponent } from "react";

// import Report from './report';
import "./index.scss";
import SideBar from "/modules/components/SideBar";
export default class Main extends PureComponent {
    render() {
        const { topic, title = "最新文章" } = this.props;
        return (
            <div id="main-container" className="container">
                <div className="main-left">
                    <div className="main-title title-attention">{title}</div>
                    {this.props.children}
                </div>
                <div className="main-right">
                    <SideBar />
                </div>
            </div>
        );
    }
}
