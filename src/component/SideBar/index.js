import React, { PureComponent } from "react";

// import Report from './report';
import "./index.scss";
import TopicType from "./Items/topicType";
import OpenProject from "./Items/openProject";
import FollowUs from "./Items/FollowUs";

export default class SideBar extends PureComponent {
    render() {
        const { topic, title = "最新文章" } = this.props;
        return (
            <div id="side-container">
                <TopicType />
                <OpenProject />
                <FollowUs />
            </div>
        );
    }
}

// class ItemWrapper extends PureComponent {
//     render() {
//         const { topic,title="最新文章" } = this.props;
//         return (
//             <div id="side-container" >

//             </div>
//         );
//     }
// }
