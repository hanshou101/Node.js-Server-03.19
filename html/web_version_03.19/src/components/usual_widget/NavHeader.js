"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bs_css = require("../../css/My_BootStrap.css");
class NavHeader extends React.Component {
    render() {
        return (React.createElement("div", { className: bs_css.flex_row, style: {
                padding: "0.5em",
                height: "auto",
                width: "100%",
            } },
            React.createElement("div", { className: bs_css.flex_row, style: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                } },
                React.createElement("h5", null,
                    React.createElement("img", { className: "img-thumbnail rounded-circle", src: '/resources/logo_3.jpg', alt: "test", style: {
                            width: "2em",
                            height: "2em",
                        } }),
                    React.createElement("span", { className: "text-default", style: {
                            fontWeight: "bolder",
                        } }, "Django\u5C0F\u7A0B\u5E8F"))),
            React.createElement("div", { className: bs_css.flex_row, style: {
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "center",
                } },
                React.createElement("span", { className: "text-success", style: {
                        fontSize: "1em",
                        paddingRight: "3em",
                    } }, "\u9996\u9875"),
                React.createElement("span", { className: "text-primary", style: {
                        fontSize: "1em",
                        paddingRight: "3em",
                    } }, "\u89E3\u51B3\u65B9\u6848"),
                React.createElement("span", { className: "text-primary", style: {
                        fontSize: "1em",
                        paddingRight: "3em",
                    } }, "\u4EE3\u7406\u52A0\u76DF"),
                React.createElement("span", { className: "text-primary", style: {
                        fontSize: "1em",
                        paddingRight: "3em",
                    } }, "\u4F7F\u7528\u8BF4\u660E"),
                React.createElement("span", { className: "text-primary", style: {
                        fontSize: "1em",
                        paddingRight: "3em",
                    } }, "\u6CE8\u518C"),
                React.createElement("span", { className: "text-primary", style: {
                        fontSize: "1em",
                        paddingRight: "3em",
                    } }, "\u767B\u5F55"))));
    }
}
exports.default = NavHeader;
