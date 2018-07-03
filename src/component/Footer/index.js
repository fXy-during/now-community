import React, { PureComponent, Component } from "react";

import "./index.scss";
("NOW直播  腾讯alloyteam  腾讯ISUX  腾讯高校合作  T派校园  淘宝UED  百度FEX  w3ctech");

const friendLink = [
    {
        text: "NOW直播",
        path: "https://now.qq.com/",
        alt: ""
    },
    {
        text: "腾讯alloyTeam",
        path: "http://www.alloyteam.com/",
        alt: ""
    },
    {
        text: "腾讯ISUX",
        path: "https://isux.tencent.com/",
        alt: ""
    },
    {
        text: "腾讯高校合作",
        path: "http://ur.tencent.com/",
        alt: ""
    },
    {
        text: "T派校园",
        path: "http://tpai.qq.com/race",
        alt: ""
    },
    {
        text: "淘宝UED",
        path: "http://taobaofed.org/",
        alt: ""
    },
    {
        text: "百度FEX",
        path: "https://fex.baidu.com/",
        alt: ""
    },
    {
        text: "w3ctech",
        path: "https://www.w3ctech.com/",
        alt: ""
    },
    {
        text: "前端乱炖",
        path: "http://www.html-js.com/",
        alt: ""
    },
    {
        text: "HTML5中国",
        path: "http://caibaojian.com/",
        alt: ""
    },
    {
        text: "W3C社区",
        path: "https://www.w3cvip.org/",
        alt: ""
    }
];

class Footer extends PureComponent {
    constructor() {
        super(...arguments);

        this.state = {
            footer: "ivweb"
        };
    }

    render() {
        return (
            <footer id="footer-container">
                <div className="container">
                    <div className="footer-content">
                        <div className="friend-link-wrapper">
                            <h3>友情链接&合作伙伴</h3>
                            <p>
                                {friendLink.map(link => (
                                    <span className="friend-link-item">
                                        <a href={link.path}>{link.text}</a>
                                    </span>
                                ))}
                            </p>
                            <div className="footer-copy">
                                Copyright © 2016-2018; ivweb.io. All Rights
                                Reserved. ivwebte
                            </div>
                        </div>
                        <div className="footer-our-code">
                            <div className="footer-our-code-item">
                                <span>微信二维码</span>
                                <img
                                    src={require("../../assets/images/wechat_code.png")}
                                />
                            </div>
                            <div className="footer-our-code-item">
                                <span>小程序二维码</span>
                                <img
                                    src={require("../../assets/images/xiaochegnxu.png")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
