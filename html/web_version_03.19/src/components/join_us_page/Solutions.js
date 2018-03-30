"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bs_css = require("../../css/My_BootStrap.css");
class Solutions extends React.Component {
    render() {
        var item_datas = [
            "/resources/join_us/solutions/solution_1.png",
            "/resources/join_us/solutions/solution_2.png",
            "/resources/join_us/solutions/solution_3.png",
            "/resources/join_us/solutions/solution_4.png",
            "/resources/join_us/solutions/solution_5.png",
            "/resources/join_us/solutions/solution_6.png",
            "/resources/join_us/solutions/solution_7.png",
            "/resources/join_us/solutions/solution_8.png",
        ];
        var item_divs = [];
        item_datas.forEach((item) => {
            item_divs.push(React.createElement("img", { src: item, alt: "\u4E0A\u4F73\u7684\u89E3\u51B3\u65B9\u6848", style: {
                    width: "17em",
                    height: "17em",
                    margin: "1em",
                } }));
        });
        return (React.createElement("div", { className: bs_css.flex_column, style: {
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2em",
                paddingBottom: "2em",
            } },
            React.createElement("h2", null, "\u89E3\u51B3\u65B9\u6848"),
            React.createElement("span", { className: "      text-muted      ", style: {
                    marginTop: "2em",
                } }, "\u6253\u901A\u591A\u6E20\u9053\uFF0C\u638C\u63E1\u6700\u65B0\u5E02\u573A"),
            React.createElement("div", { className: bs_css.flex_row, style: {
                    width: "76em"
                } }, item_divs)));
    }
}
exports.default = Solutions;
