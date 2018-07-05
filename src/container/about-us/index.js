import React,{PureComponent} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Article from "../../components/Article";
import Comment from "../../components/comment"
import Content from "../../Layout/Content";
import Main from "../../Layout/Main";

import "./index.scss";

export default class AboutUs extends PureComponent {
    constructor(){
        super(...arguments);
        this.state = {
            selected: "about",

        }
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
    }
    componentDidMount(){
        let imgCon = this.imgCon,
        count  =  184,
        pixArr = [25,48,71,28,52,76,54,32],
        readyImage = [];
        while(count--){
            let _span = document.createElement('span'),
                _img = document.createElement('img'),
                index = pixArr.indexOf(184-count);
                _span.appendChild(_img);
                imgCon.appendChild(_span);
                    if(index>=0){
                        // _img.src= require("../../assets/images/avatar.png");
                        pixArr.splice(index,1);
                        readyImage.push(_img);
                    }
        }
        // 字母渐入
addString(readyImage);
// 图片渐入
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
            isHome={selected === "home"}
          >
            <div id="about-container" ref={imgCon => this.imgCon = imgCon}>
              {/* <canvas ref={canvas => this.canvas = canvas} /> */}
            </div>
          </Main>
        </Content>
        <Footer />
      </div>
        )
    }
}
function addImage(arr) {
            arr.sort(()=>Math.random()>.5 ? -1 : 1)
        
        wheel(arr, arr.length-1, img => {
                let _span = img.parentNode;
                // img.style.opacity = "0.3";
            _span.style.backgroundColor = "#fff";
            

                img.src= require("../../assets/images/avatar.png");

            img.style.opacity = "1";
        })
}

function addString(arr) {
        arr.sort(()=>Math.random()>.5 ? -1 : 1)
        
        wheel(arr, arr.length-1, img => {
                let _span = img.parentNode;
            _span.style.backgroundColor = "#0061c4";
        })

        setTimeout(()=>addImage(arr.reverse()),700)
}

function wheel(arr,count,fn) {
    if(count<0) return
    setTimeout(()=>{
        // arr[count].src= require("../../assets/images/avatar.png")
        fn(arr[count]);
        wheel(arr, --count, fn);
    },100)
}
