"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const css = require("../../css/App.css");
exports.default = class ProjectShows extends React.Component {
    render() {
        var length = 5;
        var item_datas = [];
        for (var i = 0; i < length; i++) {
            item_datas.push({
                img_src: '/resources/project_shows/project_' + (i + 1) + '.png'
            });
        }
        var item_divs = [];
        for (var i = 0; i < length; i++) {
            var img_src = item_datas[i]['img_src'];
            item_divs.push(React.createElement("div", { "css-role": "project_shows_image_divs" },
                React.createElement("img", { src: img_src, alt: "project" })));
        }
        return (React.createElement("div", { className: css.project_shows_total },
            React.createElement("span", { "css-role": "project_shows_total_title" }, "\u6C5F\u54E5Django-\u6848\u4F8B"),
            React.createElement("span", { "css-role": "project_shows_total_sub_title" }, "\u6211\u4EEC\u79EF\u7D2F\u4E86\u5404\u884C\u4E1A\u4E30\u5BCC\u7684\u6848\u4F8B\u548C\u7ECF\u9A8C\uFF0C\u4E94\u5E74\u6765\u4E3A200\u591A\u5BB6\u4F01\u4E1A\u63D0\u5347\u4EA7\u54C1\u4EF7\u503C"),
            React.createElement("div", { className: css.project_shows_bitmaps }, item_divs),
            React.createElement("button", { "css-role": "project_shows_total_bottom_btn" }, "\u67E5\u770B\u66F4\u591A \u2192")));
    }
};
