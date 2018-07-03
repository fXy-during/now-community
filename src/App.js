import React, { Component } from "react";
// import { getActivityConfig } from "./actions";
// import Report from './report';
import "./index.scss";

import Header from "/modules/components/Header";
import Footer from "/modules/components/Footer";
// import Banner from "/modules/components/Banner";
// import Weekly from "/modules/components/Weekly";
// import ArticleAbbre from "/modules/components/ArticleAbbre";
import Content from "./Layout/Content";
import Main from "./Layout/Main";
// import articleMap from "./articleMap";

// const weeklyArtical = {
//   title: "React-Native通用化建设与性能优化",
//   article: `Sass 有两种语法格式。首先是 SCSS (Sassy CSS) —— 也是本文示例所使用的格式 —— 这种格式仅在 CSS3 语法的基础上进行拓展，所有 CSS3 语法在 SCSS 中都是通用的，同时加入 Sass 的特色功能。此外，SCSS 也支持大多数 CSS hacks 写法以及浏览器前缀写法 (vendor-specific syntax)，以及早期的 IE 滤镜写法。这种格式以 .scss 作为拓展名。
//     另一种也是最早的 Sass 语法格式，被称为缩进格式 (Indented Sass) 通常简称 "Sass"，是一种简化格式。它使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，很多人认为这样做比 SCSS 更容易阅读，书写也更快速。缩进格式也可以使用 Sass 的全部功能，只是与 SCSS 相比个别地方采取了不同的表达方式，具体请查看 the indented syntax reference。这种格式以 .sass 作为拓展名。`
// };

export default class pageComponent extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isFlow: false
    };
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
  componentWillMount() {
    // this.getLegoConfig();

    window.removeEventListener("scroll", this.onScoll);
  }

  render() {
    const { activityConfig } = this.props,
      { isFlow } = this.state;

    return (
      <div className="page-container">
        <Header selected="home" isFlow={isFlow} />
        <Banner />
        <Content>
          <Weekly {...weeklyArtical} />
          <Main>
            {articleMap.map(article => (
              <ArticleAbbre {...article} key={article.id} />
            ))}
            <div className="content-btn">查看全部文章</div>
          </Main>
        </Content>
        <Footer />
      </div>
    );
  }
}
