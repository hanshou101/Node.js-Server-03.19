"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const css = require("../../css/App.css");
exports.default = class ProService extends React.Component {
    render() {
        var length = 9;
        var category_list = [
            '注册账号',
            '选择模板',
            '配置信息',
            '提交审核',
            '发布上线',
        ];
        var item_datas = [];
        for (var i = 0; i < length; i++) {
            //上图下文的情况
            if (i % 2 == 0) {
                var index = i / 2;
                item_datas.push({
                    img_src: '/resources/pro_service/gaoduan_' + (index + 1) + '.png',
                    cate: category_list[index]
                });
            }
            else {
                item_datas.push({
                    img_src: '/resources/pro_service/next.png'
                });
            }
        }
        var item_divs = [];
        for (var j = 0; j < length; j++) {
            var pojo = item_datas[j];
            //如果是上图下文的情况
            if (pojo['cate']) {
                item_divs.push(React.createElement("div", { className: css.pro_service_a_item },
                    React.createElement("img", { src: pojo['img_src'], alt: "pro_service" }),
                    React.createElement("span", { "css-role": "pro_service_item_text" }, pojo['cate'])));
            }
            else {
                item_divs.push(React.createElement("img", { "css-role": "pro_service_item_arrow", src: pojo['img_src'], alt: "next" }));
            }
        }
        return (React.createElement("div", { className: css.pro_service_total },
            React.createElement("span", { "css-role": "pro_service_total_title" }, "\u9AD8\u7AEF\u5B9A\u5236\u5F00\u53D1 \u79C1\u6709\u5316\u90E8\u7F72"),
            React.createElement("div", { className: css.pro_service_lists }, item_divs)));
    }
};
