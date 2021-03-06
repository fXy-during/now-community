import React, { Component } from "react";
import "./App.css";
import marked from "marked";
import hljs from "highlight";
import "github-markdown-css/github-markdown.css";
import simplemde from "simplemde";
// https://www.cnblogs.com/djtao/p/6224399.html

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      oText: {
        __html: ""
      },
      tText: {
        __html: ""
      }
    };

    this.headingDescription = headingDescriptionFn();
    this.MDEditOption = getMDEditOption(this.headingDescription);
    this.MDRenderOption = getMDRenderOption();
  }
  componentDidMount() { }

  oTextChange(e) {
    const value = e.target.value,
      tText = marked(value, this.MDRenderOption),
      oText = marked(value, this.MDEditOption);
    // console.log("hljs.highlightAuto(tText).value)
    this.setState({
      oText: {
        __html: oText
      },
      tText: {
        __html: tText
      }
    });
    // ReactDOM.render(tText, this.target);
  }

  render() {
    console.log(this.headingDescription.getHeading());
    return (
      <div className="App">
        <section className="edit-input">
          <textarea onChange={this.oTextChange.bind(this)} />
          <div
            className="edit-fix-input"
            dangerouslySetInnerHTML={this.state.oText}
          />
        </section>{" "}
        <section className="edit-preview">
          <div
            className="markdown-body"
            id="md-target"
            dangerouslySetInnerHTML={this.state.tText}
          />{" "}
        </section>{" "}
      </div>
    );
  }
}
// <div>{this.state.tText}</div>

export default App;

function getMDRenderOption() {
  let opt = {},
    rendererMD = new marked.Renderer();
  rendererMD.image = function (src) {
    console.log("text,level", src);
    return `<figure><img src=${src} alt="test" /></figure>`;
  };

  return {
    renderer: rendererMD,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  };
}

const headingDescriptionFn = () => {
  const store = [];
  return {
    pushHeading: (heading, level) => store.push({ heading, level }),
    getHeading: () => store
  };
};
const headingDescription = headingDescriptionFn()
function getMDEditOption() {
  let rendererMD = new marked.Renderer();

  rendererMD.heading = function (text, level) {
    // console.log("text,level fail?", text, level);
    // let escapedText = text.toLowerCase().replace(/[^\w]+/g, "-"),
    let _level = "######".slice(0, level);
    headingDescription.pushHeading(text, level);
    // [].full
    return `<p> <span class="headding-prefix">${_level} ${text} </span></p>`;
  };
  rendererMD.blockquote = function (string) {
    // <p><a href="https://github.com/feflow/feflow">Feflow</a></p>
    console.log("blockquote string", string);
    // let escapedText = text.toLowerCase().replace(/[^\w]+/g, "-"),
    // _level = "######".slice(0, level);
    // [].full

    // let doms = parseDom(string);
    // console.log(doms);
    return `<p>dd</p>`;
  };
  rendererMD.codespan = function (code) {
    // <p><a href="https://github.com/feflow/feflow">Feflow</a></p>
    console.log("codespan string", code);
    // let escapedText = text.toLowerCase().replace(/[^\w]+/g, "-"),
    // _level = "######".slice(0, level);
    // [].full

    // let doms = parseDom(string);
    // console.log(doms);
    return `<code class="code">\`${code}\` </code>`;
  };

  rendererMD.listitem = function (text) {
    // <p><a href="https://github.com/feflow/feflow">Feflow</a></p>
    console.log("listitem string", text);
    // let escapedText = text.toLowerCase().replace(/[^\w]+/g, "-"),
    // _level = "######".slice(0, level);
    // [].full

    // let doms = parseDom(string);
    // console.log(doms);
    return `<p><span  class="headding-prefix">*</span> listitem </p>`;
  };
  return {
    renderer: rendererMD,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  };
}

function parseDom(arg) {
  var objE = document.createElement("div");

  objE.innerHTML = arg;

  return objE.childNodes;
}
