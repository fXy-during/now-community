import React, { Component, ReactDOM } from "react";

import marked from "marked";

class MD extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      oText: "",
      tText: ""
    };
  }
  oTextChange(e) {
    const value = e.target.value;
    if (value) {
      this.setState({
        oText: value
      });
    }
  }
  renderMD() {
    const { oText } = this.state,
      tText = marked(oText);

    return <div> {tText} </div>;
  }
  render() {
      ReactDOM
  }
}
// <div>{this.state.tText}</div>
ReactDOM.render();
export default App;
