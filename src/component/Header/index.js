import React, { PureComponent, Component } from "react";
// Modal
// import

// TODO
// Modal 弹窗出现后右侧下拉条消失 导致banner移动
import Modal from "antd/lib/Modal";
import "antd/lib/Modal/style/css";

import "./index.scss";

const tabMap = [
    {
        text: "首页",
        path: "/home"
    },
    {
        text: "博客",
        path: "/blog"
    },
    {
        text: "团队生活",
        path: "/teamlife"
    },
    {
        text: "关于我们",
        path: "/about"
    }
];

class Header extends PureComponent {
    constructor() {
        super(...arguments);

        this.state = {
            header: "ivweb",
            searchValue: "",
            visible: false,
            isLoginProfile: true
        };
    }
    searchValueChange(e) {
        this.setState({
            searchValue: e.target.value
        });
    }
    onCancel() {
        this.setState({
            visible: false
        });
    }
    showModal(flag) {
        let isLoginProfile =
            flag != undefined ? flag : this.state.isLoginProfile;
        this.setState({
            isLoginProfile:isLoginProfile,
            visible: true,
        });
    }
    changeProfile(bool) {
        this.setState({
            isLoginProfile: bool
        });
    }
    renderLogin() {
        return (
            <div>
                <h3>登录</h3>
                <div className="lr-form">
                    <input placeholder="请输入姓名/邮箱" type="text" />
                    <input placeholder="请输入密码" type="password" />
                    <button className="lr-btn">登录</button>
                </div>
                <div className="lr-service">
                    <span onClick={() => this.changeProfile(false)}>注册</span>
                    <span>忘记密码</span>
                </div>
                <div className="lr-third">
                    <span className="lr-third-title lr-title-be-af">
                        第三方账号登录
                    </span>
                    <div className="lr-third-part">
                        <div className="lr-third-part-box">
                            <i className="icon icon-md icon-wechat lr-icon-mi" />
                        </div>
                        <div className="lr-third-part-box">
                            <i className="icon icon-md  icon-sina" />
                        </div>
                        <div className="lr-third-part-box">
                            <i className="icon icon-md  icon-github" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderRegister() {
        const lrService = { justifyContent: "center", marginTop: 30 };
        return (
            <div>
                <h3>注册</h3>
                <div className="lr-form">
                    <input placeholder="请输入姓名" type="text" />
                    <input placeholder="请输入邮箱" type="email" />
                    <input placeholder="请输入密码" type="password" />
                    <button className="lr-btn">注册</button>
                </div>
                <div className="lr-service" style={lrService}>
                    <span onClick={() => this.changeProfile(true)}>
                        已有账号，直接登陆
                    </span>
                </div>
            </div>
        );
    }
    render() {
        const { selected, isFlow } = this.props,
            { isLoginProfile } = this.state;

        return (
            <header
                id="header-container"
                className={isFlow ? "header-flow" : "header-normal"}
            >
                <div className="head-content container">
                    {isFlow ? (
                        <i className="icon logo-flow " />
                    ) : (
                        <i className="icon logo " />
                    )}

                    <nav>
                        <ul className="nav-container">
                            {tabMap.map(item => {
                                let { path, text } = item;
                                return (
                                    <li
                                        key={path}
                                        className={
                                            path.slice(1) === selected
                                                ? "nav-selected"
                                                : ""
                                        }
                                    >
                                        <a href={path}>{text}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className="search-container">
                        <input
                            placeholder="搜索感兴趣的内容..."
                            value={this.state.searchValue}
                            onChange={e => this.searchValueChange(e)}
                        />
                        <i className="icon search" />
                    </div>
                    <div className="header-action-container">
                        <div className="action-write">写文章</div>
                        <div className="action-user">
                            <span onClick={() => this.showModal(false)}>
                                注册
                            </span>·
                            <span onClick={() => this.showModal(true)}>
                                登陆
                            </span>
                        </div>
                    </div>
                </div>
                <Modal
                    visible={this.state.visible}
                    // title="登录"
                    onCancel={() => this.onCancel()}
                    onOk={() => this.onOk()}
                    footer={null}
                    keyboard={true}
                    wrapClassName="lr-here"
                    zIndex={99999999}
                    style={{ width: "800px" }}
                    bodyStyle={{ padding: 0, borderRadius: 0, width: "100%" }}
                    // closable={false}
                >
                    <div className="lr-container">
                        <section className="lr-left">
                            <img
                                src={require("../../assets/images/LR_left.png")}
                            />
                        </section>
                        <section className="lr-right">
                            <div className="lr-box">
                                {isLoginProfile
                                    ? this.renderLogin()
                                    : this.renderRegister()}
                            </div>
                        </section>
                    </div>
                </Modal>
            </header>
        );
    }
}

Header.defaultProps = {
    selected: "blog"
};
// const Header = title => {
//     return <div>header</div>;
// };

export default Header;
