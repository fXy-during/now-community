import React, { PureComponent } from "react";

// import Report from './report';
import "./index.scss";


export default class ArticleOutline extends PureComponent {
  render() {
    const {
      headingDescription = headingDescription,
      title = "目录"
    } = this.props;
    return (
      <div className="article-contianer">
            <div className="article-title"> {title} </div>{" "}
            
      </div>
    );
  }
}
