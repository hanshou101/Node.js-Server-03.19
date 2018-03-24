"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const css = require("../../css/App.css");
exports.default = class TitleBar extends React.Component {
    render() {
        return (React.createElement("div", { className: css.titlebar_total },
            React.createElement("div", { className: css.titlebar_left },
                React.createElement("img", { "css-role": "titlebar_l_logo", alt: "logo", src: '/resources/logo_3.jpg' }),
                React.createElement("span", { "css-role": "titlebar_l_text" }, "\u6C5F\u54E5Django\u5C0F\u7A0B\u5E8F")),
            React.createElement("div", { className: css.titlebar_right },
                React.createElement("span", { "css-role": "titlebar_r_text_selected" }, "\u9996\u9875"),
                React.createElement("span", { "css-role": "titlebar_r_text" }, "\u89E3\u51B3\u65B9\u6848"),
                React.createElement("span", { "css-role": "titlebar_r_text" }, "\u4EE3\u7406\u52A0\u76DF"),
                React.createElement("span", { "css-role": "titlebar_r_text" }, "\u4F7F\u7528\u8BF4\u660E"),
                React.createElement("span", { "css-role": "titlebar_r_text" }, "\u6CE8\u518C"),
                React.createElement("span", { "css-role": "titlebar_r_text" }, "\u767B\u5F55"),
                React.createElement("img", { "css-role": "titlebar_r_logo", src: '/resources/search_2.jpg', alt: "search" }))));
    }
};
