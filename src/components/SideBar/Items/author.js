import React, { PureComponent } from "react";

// import Report from './report';
import "./index.scss";

export default class Author extends PureComponent {
    render() {
        const { topic = ["HTML", "CSS", "JS", "React Native"],title="话题分类" } = this.props;
        return (
            <div className="side-item-wrapper">
                <div className="side-item-title">{title}</div>
                <div className="side-topic"> 
                    
                {topic.map(item => <div className="side-topic-item">{item}</div>)}
                </div>
            </div>
        );
    }
}
