"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bs_css = require("../../css/My_BootStrap.css");
class JoinSteps extends React.Component {
    render() {
        var item_divs = [];
        var item_datas = [
            {
                imgSrc: "/resources/join_us/steps/step_1.png",
                title: "咨询沟通",
            },
            {
                imgSrc: "/resources/join_us/steps/next.png",
            },
            {
                imgSrc: "/resources/join_us/steps/step_2.png",
                title: "产品了解",
            },
            {
                imgSrc: "/resources/join_us/steps/next.png",
            },
            {
                imgSrc: "/resources/join_us/steps/step_3.png",
                title: "签订协议",
            },
            {
                imgSrc: "/resources/join_us/steps/next.png",
            },
            {
                imgSrc: "/resources/join_us/steps/step_4.png",
                title: "代理支持",
            },
        ];
        item_datas.forEach((item) => {
            if (item.title) {
                item_divs.push(React.createElement("div", { className: bs_css.flex_column, style: {
                        justifyContent: "center",
                        alignItems: "center",
                    } },
                    React.createElement("img", { src: item.imgSrc, alt: "\u89C4\u8303\u6B65\u9AA4", style: {
                            height: "8em",
                            width: "8em",
                        } }),
                    React.createElement("span", { style: {
                            marginTop: "1em",
                            marginBottom: "2.5em",
                        } }, item.title)));
            }
            else {
                item_divs.push(React.createElement("div", { className: bs_css.flex_column, style: {
                        justifyContent: "center",
                        alignItems: "center",
                    } },
                    React.createElement("img", { src: item.imgSrc, alt: "\u7BAD\u5934", style: {
                            marginBottom: "2em",
                            width: "2.375em",
                            height: "1em",
                            marginLeft: "2em",
                            marginRight: "2em",
                        } })));
            }
        });
        return (React.createElement("div", { className: bs_css.flex_column, style: {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
            } },
            React.createElement("h2", { style: {
                    marginTop: "2em",
                } }, "\u4EE3\u7406\u52A0\u5165\u6D41\u7A0B"),
            React.createElement("div", { className: bs_css.flex_row, style: {
                    marginTop: "2em",
                } }, item_divs)));
    }
}
exports.default = JoinSteps;
