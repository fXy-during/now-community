import React, { PureComponent } from "react";

// import Report from './report';
import "./index.scss";
import marked from "marked";
import ArticleMeta from "../ArticleMeta";

// import hljs from 'highlight';
const mdOrigin = `
## title  
\`code\`

### title2`;

export default class ArticleOutline extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      md: {
        __html: "<p>66</p>"
      }
    };
  }
  renderMD(string) {
    return marked(string, getMDRenderOption());
  }
  render() {
    const {
        headingDescription = headingDescription,
        title = "目录"
      } = this.props,
      article = {
        author: "link",
        type: "Node",
        time: "2天前",
        comment: 12,
        like: 48,
        share: 1,
        num: 1
      };

    return (
      <div className="article-contianer">
        <div>
          <div className="article-title"> {title} </div>{" "}
          <ArticleMeta {...article}>
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: this.renderMD(mdOrigin) }}
            />
          </ArticleMeta>
        </div>
      </div>
    );
  }
}

function getMDRenderOption() {
  let opt = {},
    rendererMD = new marked.Renderer();
  rendererMD.image = function(src) {
    console.log("text,level", src);
    return `<figure><img src=${src} alt="test" /></figure>`;
  };
  rendererMD.heading = function(text, level) {
    // console.log("text,level", text);
  
    return `<h${level} id='title-${text}'> ${text} </h${level}>`;
  };
  return {
    renderer: rendererMD,
    // highlight: function(code) {
    //   return hljs.highlightAuto(code).value;
    // },
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  };
}
