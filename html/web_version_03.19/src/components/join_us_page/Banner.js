"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Banner extends React.Component {
    render() {
        return (React.createElement("div", { style: {
                display: "flex",
                direction: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                width: "100%",
                background: "black",
                padding: "0em",
            } },
            React.createElement("img", { src: "/resources/join_us/banner.jpg", alt: "\u6A2A\u5E45\u56FE\u7247", style: {
                    maxWidth: "100%",
                    width: "100%",
                } }),
            React.createElement("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    left: "0em",
                    top: "0em",
                    width: "100%",
                    height: "100%",
                    padding: "2em",
                } },
                React.createElement("h1", null,
                    React.createElement("span", { style: {
                            color: "white",
                            fontSize: "1.75em",
                            fontWeight: "bolder",
                        } }, "Django\u4EE3\u7406\u5546")),
                React.createElement("h1", null,
                    React.createElement("span", { style: {
                            color: "white",
                            fontSize: "1.75em",
                            fontWeight: "bolder",
                        } }, "\u706B\u70ED\u62DB\u52DF\u4E2D")),
                React.createElement("span", { className: "", style: {
                        color: "white",
                        marginTop: "1em"
                    } }, "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5E02\u573A  \u5343\u4EBF\u5E02\u573A\u7B49\u4F60\u6765"),
                React.createElement("button", { className: "btn btn-success", style: {
                        color: "white",
                        marginTop: "1.5em",
                    } }, "\u6210\u4E3A\u4EE3\u7406\u5546"))));
    }
}
exports.default = Banner;
