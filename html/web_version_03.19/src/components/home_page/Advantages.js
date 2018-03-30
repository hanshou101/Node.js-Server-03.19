"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const css = require("../../css/App.css");
exports.default = class Advantages extends React.Component {
    render() {
        var length = 14;
        var item_datas = [];
        var advantage_list = [
            React.createElement("span", { "css-role": "advantages_item_text" }, "\u5236\u4F5C\u5468\u671F\u77ED"),
            React.createElement("span", { "css-role": "advantages_item_text" }, "\u64CD\u4F5C\u7B80\u5355"),
            React.createElement("span", { "css-role": "advantages_item_text" }, "\u9996\u9875DIY"),
            React.createElement("span", { "css-role": "advantages_item_text" }, "\u8BBE\u8BA1\u7CBE\u7F8E"),
            React.createElement("span", { "css-role": "advantages_item_text" }, "\u4E13\u5C5E\u552E\u540E\u670D\u52A1"),
            React.createElement("span", { "css-role": "advantages_item_text" }, "\u72EC\u7ACB\u540E\u53F0"),
            React.createElement("span", { "css-role": "advantages_item_text" }, "\u6570\u636E\u7EDF\u8BA1\u5206\u6790"),
            React.createElement("div", { className: css.advantages_a_item },
                React.createElement("span", { "css-role": "advantages_item_text" }, "\u591A\u529F\u80FD"),
                React.createElement("span", { "css-role": "advantages_item_text" }, "\u6A21\u677F\u9009\u62E9")),
            React.createElement("div", { className: css.advantages_a_item },
                " ",
                React.createElement("span", { "css-role": "advantages_item_text" }, "\u652F\u6301\u4E0D\u540C"),
                " ",
                React.createElement("span", { "css-role": "advantages_item_text" }, "\u884C\u4E1A\u6A21\u5F0F")),
            React.createElement("span", { "css-role": "advantages_item_text" }, "\u591A\u79CD\u5165\u53E3"),
            React.createElement("span", { "css-role": "advantages_item_text" }, "\u4E8C\u7EF4\u7801\u63A8\u5E7F"),
            React.createElement("span", { "css-role": "advantages_item_text" }, "\u7CFB\u7EDF\u7A33\u5B9A\u6D41\u7545"),
            React.createElement("div", { className: css.advantages_a_item },
                " ",
                React.createElement("span", { "css-role": "advantages_item_text" }, "\u5546\u54C1\u4E0A\u4F20"),
                " ",
                React.createElement("span", { "css-role": "advantages_item_text" }, "\u65E0\u4E0A\u9650")),
            React.createElement("span", { "css-role": "advantages_item_text" }, "\u529F\u80FD\u81EA\u7531\u5F00\u53D1"),
        ];
        for (var i = 0; i < length; i++) {
            item_datas.push({
                advan: advantage_list[i],
                img_src: "/resources/advantages/icon_" + (i + 1) + ".png"
            });
        }
        var item_divs = [];
        var item_per_row = [];
        for (var j = 0; j < length; j++) {
            var advan = item_datas[j]['advan'];
            var img_src = item_datas[j]['img_src'];
            item_per_row.push(React.createElement("div", { className: css.advantages_a_item },
                React.createElement("img", { src: img_src, alt: "advantage" }),
                advan));
            /**
             * 满7个元素，打包成1行
             * 如果是最后一个元素，也打包成1行
             */
            if (j % 7 == 6 || j == length - 1) {
                // 打包成1行
                item_divs.push(React.createElement("div", { className: css.advantages_lists }, item_per_row));
                //重置item_per_row容器
                item_per_row = [];
            }
        }
        return (React.createElement("div", { className: css.advantages_total },
            React.createElement("span", { "css-role": "advantages_total_title" }, "\u6C5F\u54E5Django-\u4F18\u52BF"),
            React.createElement("span", { "css-role": "advantages_total_sub_title" }, "\u6253\u901A\u591A\u6E20\u9053\uFF0C\u638C\u63E1\u6700\u65B0\u5E02\u573A\u52A8\u8109"),
            item_divs));
    }
};
