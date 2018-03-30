"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bs_css = require("../../../css/My_BootStrap.css");
class SimpleIntro extends React.Component {
    render() {
        var title_size_ratio = 1.5;
        var imgSrc = this.props['imgSrc'];
        var title = this.props['title'];
        var intro = this.props['intro'];
        var text_span_width = title.length * title_size_ratio;
        return (React.createElement("div", { className: bs_css.flex_row, style: {
                padding: "2em",
            } },
            React.createElement("img", { className: "rounded-circle", src: imgSrc, alt: "\u4ECB\u7ECD\u56FE\u7247", style: {
                    width: "7em",
                    height: '7em',
                } }),
            React.createElement("span", { className: bs_css.flex_column, style: {
                    justifyContent: "space-between",
                } },
                React.createElement("span", { style: {
                        whiteSpace: "nowrap",
                        width: text_span_width + "em",
                        minWidth: "10em",
                    } }, title),
                React.createElement("span", { style: {
                        whiteSpace: "pre-wrap",
                        width: text_span_width + "em",
                        minWidth: "10em",
                    } }, intro))));
    }
}
exports.default = SimpleIntro;
