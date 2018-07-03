import React, {
  PureComponent,
  ReactDOM
} from "react";

// import Report from './report';
import "./index.scss";
import Topic from "./Items/topicType";
import OpenProject from "./Items/openProject";
import Follow from "./Items/followUs";
import Author from "./Items/author";
import ArticleOutline from "./Items/articleOutline";
import PropTypes from "prop-types";

// todo

export default class SideBar extends PureComponent {
  mapToRender(map) {
    let renderList = [];
  }
  // {
  //     this.mapToRender(map)
  // }
  renderSideBar(sideMap = []) {
    let _sideMap = sideMap.map((component, idx) => {
      switch (component.name) {
        case "topic":
          return <Topic { ...sideMap[idx].props || {}
          }
          />;
        case "openProject":
          return <OpenProject { ...sideMap[idx].props || {}
          }
          />;
        case "follow":
          return <Follow { ...sideMap[idx].props || {}
          }
          />;
        case "author":
          return <Author { ...sideMap[idx].props || {}
          }
          />;
        case "articleOutline":
          return <ArticleOutline { ...sideMap[idx].props || {}
          }
          />;
        default:
          return null;
      }
    });
    console.log("_sideMap", sideMap);
    return _sideMap;
  }
  render() {
    const {
      topic,
      title = "最新文章",
      sideMap
    } = this.props;
    return <div id = "side-container" > {
      this.renderSideBar(sideMap)
    } < /div>;
  }
}
// <Topic />
// <OpenProject />
// <Follow />

SideBar.propTypes = {
  SideBar: PropTypes.array
};

// class ItemWrapper extends PureComponent {
//     render() {
//         const { topic,title="最新文章" } = this.props;
//         return (
//             <div id="side-container" >

//             </div>
//         );
//     }
// }