import React, { PureComponent } from "react";

// import Report from './report';
import "./index.scss";

const headingDescription = [
  {
    level: 1,
    text: "#"
  },
  {
    level: 2,
    text: "##"
  },
  {
    level: 1,
    text: "#"
  }
];

export default class ArticleOutline extends PureComponent {
  renderOutline(headingDescription) {
    // 目录遍历算法
    return (
      <ul>
        <li>
          1
          <ul>
            <li>2</li>
            <li>2</li>
          </ul>
        </li>
      </ul>
    );
  }
  render() {
    const {
      headingDescription = headingDescription,
      title = "目录"
    } = this.props;
    return (
      <div className="side-item-wrapper">
        <div className="side-item-title"> {title} </div>{" "}
        {this.renderOutline(headingDescription)}
      </div>
    );
  }
}
