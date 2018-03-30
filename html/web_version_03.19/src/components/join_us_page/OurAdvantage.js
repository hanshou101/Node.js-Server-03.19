"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bs_css = require("../../css/My_BootStrap.css");
class OurAdvantage extends React.Component {
    render() {
        var item_datas = [
            {
                imgSrc: "/resources/join_us/our_advan_1.png",
                title: "新闻资讯"
            },
            {
                imgSrc: "/resources/join_us/our_advan_2.png",
                title: "平台新闻"
            },
            {
                imgSrc: "/resources/join_us/our_advan_3.png",
                title: "使用教程"
            },
        ];
        var item_divs = [];
        item_datas.forEach((item) => {
            item_divs.push(React.createElement("div", { className: bs_css.flex_column, style: {
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: "5.25em",
                    paddingRight: "5.25em",
                } },
                React.createElement("img", { src: item.imgSrc, alt: "\u6F5C\u5728\u4F18\u52BF/\u5DE8\u5927\u4F18\u52BF", style: {
                        width: "5em",
                        height: "4.5em",
                    } }),
                React.createElement("span", { style: {
                        marginTop: "1.5em",
                    } }, item.title)));
        });
        return (React.createElement("div", { className: bs_css.flex_column, style: {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
            } },
            React.createElement("h2", { style: {
                    marginTop: "2em",
                } }, "\u6211\u4EEC\u7684\u4F18\u52BF"),
            React.createElement("span", { className: "      text-muted      ", style: {
                    marginTop: "2em",
                    textAlign: "center",
                } },
                "\u5C0F\u7A0B\u5E8F\u7684\u76EE\u7684\u662F\u8FDE\u63A5\u4E0A\u4EBF\u7528\u6237+\u7EBF\u4E0B\u5B9E\u4F53\u5546\u5BB6\uFF0C\u628A\u8FD9\u4E0A\u4EBF\u7684\u5FAE\u4FE1\u7528\u6237\u5F15\u5BFC\u5230\u5165\u9A7B\u5C0F\u7A0B\u5E8F",
                React.createElement("br", null),
                "\u7684\u5B9E\u4F53\u5E97\u94FA\u53BB\u6D88\u8D39\u7ED9\u7528\u6237\u5E26\u6765\u751F\u6D3B\u4FBF\u5229\u7684\u540C\u65F6\uFF0C\u4E5F\u7ED9\u5165\u9A7B\u7684\u5546\u5BB6\u5E26\u6765\u5DE8\u5927\u5BA2\u6E90"),
            React.createElement("div", { className: bs_css.flex_row, style: {
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "2em",
                } }, item_divs)));
    }
}
exports.default = OurAdvantage;
