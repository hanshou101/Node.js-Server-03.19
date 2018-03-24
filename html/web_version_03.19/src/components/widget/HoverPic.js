"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class HoverPic extends React.Component {
    render() {
        var my_width = this.props['my_width'];
        var my_height = this.props['my_height'];
        var picA = this.props['picA'];
        var picB = this.props['picB'];
        return (React.createElement("div", { style: {
                width: my_width,
                height: my_height,
                position: "relative"
            } },
            React.createElement("img", { src: picA, alt: "\u5E95\u5C42\u56FE", width: my_width, height: my_height }),
            React.createElement("div", { style: {
                    width: my_width,
                    height: my_height,
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 9999,
                } },
                React.createElement("img", { src: picB, alt: "\u906E\u7F69\u56FE", width: "96px", height: "96px", style: { opacity: 0.4 } }))));
    }
}
exports.default = HoverPic;
