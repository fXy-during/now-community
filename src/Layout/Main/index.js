import React, { PureComponent } from "react";

// import Report from './report';
import "./index.scss";
import SideBar from "../../components/SideBar";
export default class Main extends PureComponent {
  render() {
    const { title, sideMap } = this.props;
    return (
      <div id="main-container" style={{ marginTop: 128 }} className="container">
        <div className="main-left">
          {title ? (
            <div className="main-title title-attention"> {title} </div>
          ) : null}

          {this.props.children}
        </div>
        <div className="main-right">
          <SideBar sideMap={sideMap} />
        </div>
      </div>
    );
  }
}
