import React, { PureComponent } from "react";

// import Report from './report';
import "./index.scss";

export default class OpenProject extends PureComponent {
    render() {
        const { title = "开源项目" } = this.props;
        return (
            <div className="side-item-wrapper">
                <div className="side-item-title">{title}</div>
                <div className="side-open-source">
                    <div className="side-open-item">
                        <img src={require("/assets/images/fe.png")} />
                        <img src={require("/assets/images/bad1.png")} />
                    </div>
                    <div className="side-open-banner">
                        <img
                            src={require("/assets/images/招聘banner.png")}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
