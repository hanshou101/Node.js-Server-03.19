"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const css = require("../../css/App.css");
var HoverPic = require('../widget/HoverPic').default;
exports.default = class Solutions extends React.Component {
    render() {
        var length = 6;
        var item_datas = [];
        var category_list = ['分销商城', '餐饮外卖', '宾馆酒店', '景点旅游', '美容美妆', '教育视频'];
        var introduce_list = [
            '分销、秒杀、拼团、预约、优惠券、积分',
            '通过小程序实现点餐、外卖、预约等功能',
            '预定酒店、支持节假日房价管控',
            '景点展示、门票预订、签证办理',
            '美妆线上商城、支持美容预约',
            '通过小程序实现音视频点播教育培训',
        ];
        for (var i = 0; i < length; i++) {
            item_datas.push({
                cate: category_list[i],
                intro: introduce_list[i],
                img_src: "/resources/solutions/case_" + (i + 1) + ".jpg",
                hover_icon_src: "/resources/solutions/hover_" + (i + 1) + ".png",
            });
        }
        var item_divs = [];
        var item_per_row = [];
        for (var j = 0; j < length; j++) {
            var img_src = item_datas[j]['img_src'];
            var hover_icon_src = item_datas[j]['hover_icon_src'];
            var cate = item_datas[j]['cate'];
            var intro = item_datas[j]['intro'];
            item_per_row.push(React.createElement("div", { className: css.solutions_a_item },
                React.createElement(HoverPic, { my_width: "343px", my_height: "238px", picA: img_src, picB: hover_icon_src }),
                React.createElement("span", { "css-role": "solutions_item_text_top" }, cate),
                React.createElement("span", { "css-role": "solutions_item_text_bottom" }, intro),
                React.createElement("button", { "css-role": "solutions_item_button" }, "\u4E03\u5929\u4F53\u9A8C\uFF1A 1\u5143")));
            /**
             * 如果数满了3个元素，打包成1行。
             * 如果是最后1个元素，打包成1行。
             */
            if (j % 3 == 2 || j == length - 1) {
                //打包成1行
                item_divs.push(React.createElement("div", { className: css.solutions_lists }, item_per_row));
                //重置item_per_row容器
                item_per_row = [];
            }
        }
        return (React.createElement("div", { className: css.solutions_total },
            React.createElement("span", { "css-role": "solutions_total_title" }, "\u6C5F\u54E5Django-\u89E3\u51B3\u65B9\u6848"),
            React.createElement("span", { "css-role": "solutions_total_sub_title" }, "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u63D0\u4F9B\u5168\u65B9\u4F4D\u7684\u5C0F\u7A0B\u5E8F\u5168\u65B0\u89E3\u51B3\u65B9\u6848"),
            React.createElement("span", { "css-role": "solutions_total_sub_title" }, "\u4E3B\u8981\u5305\u62EC\u7535\u5546\u3001O2O\u670D\u52A1\u3001\u9910\u996E\u5916\u5356\u3001\u9884\u7EA6\u6392\u961F\u3001\u8FD0\u52A8\u5065\u8EAB\u3001\u5A5A\u7EB1\u6444\u5F71\u7B49"),
            React.createElement("div", { "css-role": "solutions_gap_div" }),
            item_divs,
            React.createElement("button", { "css-role": "solutions_total_bottom_btn" }, "\u67E5\u770B\u66F4\u591A \u2192")));
    }
};
