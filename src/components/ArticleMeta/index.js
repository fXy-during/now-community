import React, { PureComponent } from "react";

import "./index.scss";

export default class ArticleMeta extends PureComponent {
  render() {
    const {
      children,
      author,
      type,
      time,
      comment,
      like,
      share,
      num
    } = this.props;
    return (
      <div>
        <div className="article-meta">
          <span>
            <img src={require("../../assets/images/avatar.png")} alt="ic" />
          </span>
          <span> {author} </span>·
          <span> {type} </span>
          <span> {time} </span>
        </div>
        {children}
        <div className="article-button">
          <div className="article-button-action-wrapper">
            <span className="article-button-item">
              <i className="icon comment" />
              <span>{comment}</span>
            </span>
            <span className="article-button-item">
              <i className="icon like" />
              <span>{like}</span>
            </span>
            <span className="article-button-item">
              <i className="icon share" />
              <span>{share}</span>
            </span>
          </div>
          <div className="article-button-pv-wrapper">
            <span className="article-button-item">
              <span>{num}人浏览</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
