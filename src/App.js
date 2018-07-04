"use strict";

import React, { Component } from "react";

// import Report from './report';
import "./index.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Comment from "./components/comment"
import Content from "./Layout/Content";
import Main from "./Layout/Main";

export default class pageComponent extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isFlow: false,
      selected: "blog",
      selectedTab: "lastest"
    };
    // this.sideMap = [{"topic", "author", "follow"];
    this.sideMap = [
      {
        name: "articleOutline",
        props: {}
      },
      {
        name: "follow",
        props: {}
      }
    ];

    // Report.init(this);
  }

  componentDidMount() {
    this.onScoll();
    window.addEventListener("scroll", this.onScoll.bind(this));
  }

  onScoll() {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop === 0) {
      this.check();
      return;
    }
    clearTimeout(this.timmer);

    this.timmer = setTimeout(() => {
      this.check();
    }, 20);
  }
  check() {
    const { isFlow } = this.state;
    if (document.documentElement.scrollTop > 0) {
      if (!isFlow) {
        this.setState({
          isFlow: true
        });
      }
    } else {
      if (isFlow) {
        this.setState({
          isFlow: false
        });
      }
    }
  }
  changeTab(selectedTab) {
    this.setState({
      selectedTab
    });
  }
  componentWillMount() {
    // this.getLegoConfig();

    window.removeEventListener("scroll", this.onScoll);
  }

  render() {
    const { activityConfig } = this.props,
      { isFlow, selectedTab, selected } = this.state,
      containerStyle = { marginTop: 130 };

    return (
      <div className="page-container">
        <Header selected={selected} isFlow={true} />
        <Content style={containerStyle}>
          <Main
            sideMap={this.sideMap}
            selectedTab={selectedTab}
            changeTab={this.changeTab.bind(this)}
            isHome={selected === "home"}
          >
            <Article />
            <Comment  />
          </Main>
        </Content>
        <Footer />
      </div>
    );
  }
}

// <div className="content-btn">查看全部文章</div>
