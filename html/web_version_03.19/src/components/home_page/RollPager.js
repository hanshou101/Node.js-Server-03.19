"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const css = require("../../css/App.css");
exports.default = class RollPager extends React.Component {
    render() {
        return (React.createElement("div", { className: css.rollpager },
            React.createElement("img", { src: "/resources/scroller_1.jpg", alt: "banner", width: "100%" })));
    }
};
