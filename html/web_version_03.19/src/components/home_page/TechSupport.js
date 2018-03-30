"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const css = require("../../css/App.css");
exports.default = class TechSupprt extends React.Component {
    render() {
        var length = 4;
        /**
         * 数据
         */
        var item_datas = [];
        var cate_list = [
            "营销插件 - 拼团",
            "营销插件 - 秒杀",
            "营销插件 - 预约",
            "营销插件 - 三级分销",
        ];
        var intro_list = [
            [
                '支持团长开团',
                '人数达到即开团成功'
            ],
            [
                '支持整点秒杀',
                '进入商品界面直接抢购',
            ],
            [
                '支持一键预约',
                '查看订单、取消订单'
            ],
            [
                '支持提现、明细',
                '分销佣金、我的团队'
            ],
        ];
        for (let i = 0; i < length; i++) {
            item_datas.push({
                img_src: '/resources/tech_tedian_icon' + '/tedian_' + (i + 1) + '.png',
                cate: cate_list[i],
                intro_top: intro_list[i][0],
                intro_bottom: intro_list[i][1],
            });
        }
        /**
         * 视图
         */
        var item_divs = [];
        for (var i = 0; i < 4; i++) {
            var img_src = item_datas[i]['img_src'];
            var cate = item_datas[i]['cate'];
            var intro_top = item_datas[i]['intro_top'];
            var intro_bottom = item_datas[i]['intro_bottom'];
            item_divs.push(React.createElement("div", { className: css.tech_support_a_item },
                React.createElement("img", { src: img_src, alt: "feature" }),
                React.createElement("span", { "css-role": "tech_support_item_top" }, cate),
                React.createElement("span", { "css-role": "tech_support_item_bottom" }, intro_top),
                React.createElement("span", { "css-role": "tech_support_item_bottom" }, intro_bottom)));
        }
        return (React.createElement("div", { className: css.tech_support_total },
            React.createElement("span", { "css-role": "tech_support_total_title" }, "\u6280\u672F\u652F\u6301"),
            React.createElement("span", { "css-role": "tech_support_total__sub_title" }, "\u5F3A\u5927\u7684\u6280\u672F\u5B9E\u529B\uFF0C\u5B89\u5168\u7A33\u5B9A\u7684\u7CFB\u7EDF\u652F\u6301"),
            React.createElement("div", { className: css.tech_support_lists }, item_divs)));
    }
};
