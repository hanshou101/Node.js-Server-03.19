"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bs_css = require("../../css/My_BootStrap.css");
class AgentSupport extends React.Component {
    render() {
        var item_datas = [
            {
                imgSrc: "/resources/join_us/agent_support/support_1.png",
                title: "产品支持"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_2.png",
                title: "资源支持"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_3.png",
                title: "物料支持"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_4.png",
                title: "市场推广"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_5.png",
                title: "培训支持"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_6.png",
                title: "会议支持"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_7.png",
                title: "CRM系统"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_8.png",
                title: "专业客服"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_9.png",
                title: "方案支持"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_10.png",
                title: "驻地支持"
            },
        ];
        var item_divs = [];
        item_datas.forEach((item) => {
            item_divs.push(React.createElement("div", { className: bs_css.flex_column, style: {
                    justifyContent: "center",
                    alignItems: "center",
                } },
                React.createElement("img", { src: item.imgSrc, alt: "\u4E0A\u4F73\u7684\u89E3\u51B3\u65B9\u6848", style: {
                        width: "7.25em",
                        height: "7.25em",
                        marginLeft: "4em",
                        marginRight: "4em",
                        marginTop: "1em",
                    } }),
                React.createElement("span", { style: {
                        marginBottom: "3em",
                    } }, item.title)));
        });
        return (React.createElement("div", { className: bs_css.flex_column, style: {
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2em",
                paddingBottom: "2em",
                backgroundImage: "url('/resources/join_us/bg_2.jpg')",
                backgroundSize: "100% 150%",
            } },
            React.createElement("h2", { style: {
                    color: "white",
                    marginTop: "2em",
                } }, "\u4EE3\u7406\u5546\u6276\u6301"),
            React.createElement("div", { className: bs_css.flex_row, style: {
                    justifyContent: "center",
                    alignItems: "center",
                    width: "78em",
                    marginTop: "2em",
                    //透明度++
                    backgroundColor: "rgba(166,217,166,0.4)",
                    zIndex: 9999
                } }, item_divs)));
    }
}
exports.default = AgentSupport;
