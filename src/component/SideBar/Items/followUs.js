import React, { PureComponent } from "react";

// import Report from './report';
import "./index.scss";

export default class FollowUs extends PureComponent {
    render() {
        const { title = "关注我们" } = this.props;
        return (
            <div className="side-item-wrapper">
                <div className="side-item-title">{title}</div>
                <div className="side-follow">
                    <div className="side-qq-code">
                        <img
                            src={require("/assets/images/qqcode.png")}
                        />
                        <span>QQ扫码加入ivweb团队公众群</span>
                    </div>
                    <div className="side-follow-other">
                        <div className="side-follow-other-item">
                            <i className="icon icon-zhihu" />
                        </div>
                        <div className="side-follow-other-item">
                            <i className="icon icon-github" />
                        </div>
                        <div className="side-follow-other-item">
                            <i className="icon icon-sina" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
