import React, { PureComponent } from "react";
import "./index.scss";

const comments = [
  {
    name: "bethon",
    pic: require("../../assets/images/avatar.png"),
    time: "2018-04-16",
    text:
      "满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊满满的干货啊",
    id: 6116564
  },
  {
    name: "jere",
    pic: require("../../assets/images/avatar.png"),
    time: "2018-01-7",
    text: "满满的干货",
    id: 611614
  }
];

export default class Comment extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      input: "",
      line: 0
    };
  }
  onChange(e) {
    // 根据字符长度来增加长度
    const value = e.target.value,
      line = Math.floor(value.toString().length / 85),
      s = line < 2 ? 0 : line - 1;
    this.setState({
      input: value,
      line: s
    });
    console.log(line);
  }
  render() {
    return (
      <div id="comment-container">
        <div className="comment-form">
          <div className="comment-form-avatar">
            <img src={require("../../assets/images/avatar.png")} alt="icon" />
          </div>
          <div className="comment-input">
            <textarea
              style={{ height: 80 + 26 * this.state.line }}
              value={this.state.input}
              onChange={this.onChange.bind(this)}
              placeholder="发表看法..."
            />
            <div className="comment-action">
              <input placeholder="昵称" />
              <button className="btn comment-sumbit">提交</button>
            </div>
          </div>
        </div>
        <div className="comment-title"> 全部评论 </div>
        {comments.map(({ name, pic, time, text, id }) => (
          <div className="comment-item-wrapper" key={id}>
            <div className="comment-img">
              <img alt="icon" src={pic} />
            </div>
            <div className="comment-text">
              <p>{name}</p>
              <p> {text} </p>
            </div>
            <div className="comment-time">
              <p>{time}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
