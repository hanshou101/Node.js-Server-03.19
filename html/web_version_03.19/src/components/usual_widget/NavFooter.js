"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bs_css = require("../../css/My_BootStrap.css");
class NavFooter extends React.Component {
    render() {
        var para_list = [
            {
                title: "服务",
                paras: [
                    '服务体系',
                    '解决方案',
                    '服务优势',
                    '合作流程',
                    '服务客户',
                ],
            },
            {
                title: "解决方案",
                paras: [
                    '零售电商',
                    '外卖点餐',
                    '视频教育',
                    '房产中介',
                ],
            },
            {
                title: "使用说明",
                paras: [
                    '小程序注册',
                    '使用江哥Django小程序',
                    '购买常见问题QA',
                ],
            },
            {
                title: "帮助支持",
                paras: [
                    '公众号平台',
                    '开发者工具',
                    '关于我们',
                ],
            },
            {
                title: "商务合作",
                paras: [
                    '邮箱：service@django.com',
                    '13725537676',
                    '座机：0755-88888888',
                    'QQ：888888888',
                    '地址：深圳市南山区深圳湾微众银行西向',
                    '星巴克旗舰店',
                ],
            },
        ];
        var item_divs = [];
        para_list.forEach((item, index) => {
            var title_color = index != para_list.length - 1 ? "white" : "#24B727";
            var para_color = index != para_list.length - 1 ? "#CCCCCC" : "white";
            var title_div = React.createElement("span", { style: { color: title_color } }, item.title);
            var para_divs = [];
            item.paras.forEach((para) => {
                para_divs.push(React.createElement("span", { style: {
                        color: para_color,
                        fontSize: "0.5em",
                        marginTop: "0.75em",
                    } }, para));
            });
            item_divs.push(React.createElement("div", { className: bs_css.flex_column, style: {
                    marginLeft: "3em",
                    marginRight: "3em",
                } },
                title_div,
                para_divs));
        });
        return (React.createElement("div", { className: bs_css.flex_column, style: {
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#2E3033",
            } },
            React.createElement("div", { className: bs_css.flex_row, style: {
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginTop: "3em",
                } },
                React.createElement("div", { className: bs_css.flex_column, style: {} },
                    React.createElement("span", { style: {
                            color: "white",
                            marginTop: "0.5em",
                        } }, "\u4E13\u6CE8\u7528\u6237\u4F53\u9A8C\u8BBE\u8BA1\u4E0E\u5F00\u53D1"),
                    React.createElement("img", { src: "/resources/qr_code.png", alt: "\u7F51\u7AD9\u4E8C\u7EF4\u7801", style: {
                            width: "7.625em",
                            height: "7.625em",
                            marginTop: "0.5em",
                        } })),
                item_divs),
            React.createElement("span", { style: {
                    fontSize: "0.5em",
                    color: "#CCCCCC",
                    textAlign: "center",
                    marginTop: "3em",
                    marginBottom: "3em",
                } },
                "\u53CB\u60C5\u94FE\u63A5\uFF1AMi\u4E91 \u817E\u8BAF\u4E91\u6559\u7A0B\u7F51 \u817E\u8BAF\u4E91 \u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0",
                React.createElement("br", null),
                React.createElement("br", null),
                "Copyright \u00A9 2018-2018 www.django-win.com \u6C5F\u54E5Django\u5C0F\u7A0B\u5E8F-Mi\u4E91\u8BA1\u7B97\u7248\u6743\u6240\u6709",
                React.createElement("br", null),
                React.createElement("br", null),
                "\u6DF1\u5733\u5E02Django\u79D1\u6280\u5F00\u53D1\u6709\u9650\u516C\u53F8 \u7CA4ICP\u59071508888\u53F7-8")));
    }
}
exports.default = NavFooter;
