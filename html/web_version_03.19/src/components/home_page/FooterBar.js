"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const css = require("../../css/App.css");
exports.default = class FooterBar extends React.Component {
    render() {
        var tab_list = [
            '服务',
            '解决方案',
            '使用说明',
            '帮助支持',
            '商务合作',
        ];
        var tab_divs = [];
        var para_list = [
            [
                '服务体系',
                '解决方案',
                '服务优势',
                '合作流程',
                '服务客户',
            ],
            [
                '零售电商',
                '外卖点餐',
                '视频教育',
                '房产中介',
            ],
            [
                '小程序注册',
                '使用江哥Django小程序',
                '购买常见问题QA',
            ],
            [
                '公众号平台',
                '开发者工具',
                '关于我们',
            ],
            [
                '邮箱：service@django.com',
                '13725537676',
                '座机：0755-88888888',
                'QQ：888888888',
                '地址：深圳市南山区深圳湾微众银行西向',
                '星巴克旗舰店',
            ],
        ];
        // 外层的标题
        for (var i = 0; i < tab_list.length; i++) {
            //大标题的文字
            var tab = tab_list[i];
            var span_list = [];
            //单次加入大标题的文字
            span_list.push(React.createElement("span", { "css-role": "footerbar_tab_title" }, tab));
            //内层的小标题
            for (var j = 0; j < para_list[i].length; j++) {
                //循环中加入小标题的文字
                span_list.push(React.createElement("span", { "css-role": "footerbar_tab_para" }, para_list[i][j]));
            }
            //将这次获得的文字，加入tab_divs
            tab_divs.push(React.createElement("div", { className: css.footerbar_paragraph }, span_list));
        }
        return (React.createElement("div", { className: css.footerbar_total },
            React.createElement("div", { className: css.footerbar_tab },
                React.createElement("div", { className: css.footerbar_paragraph },
                    React.createElement("span", { "css-role": "footerbar_qrcode_title" }, "\u4E13\u6CE8\u7528\u6237\u4F53\u9A8C\u8BBE\u8BA1\u4E0E\u5F00\u53D1"),
                    React.createElement("img", { "css-role": "footerbar_qrcode_image", src: "/resources/qr_code.png", alt: "QRCode" })),
                tab_divs),
            React.createElement("span", { "css-role": "footerbar_bottom_text" }, "\u53CB\u60C5\u94FE\u63A5\uFF1AMi\u4E91 \u817E\u8BAF\u4E91\u6559\u7A0B\u7F51 \u817E\u8BAF\u4E91 \u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0"),
            React.createElement("span", { "css-role": "footerbar_bottom_text" }, "Copyright \u00A9 2018-2018 www.django-win.com \u6C5F\u54E5Django\u5C0F\u7A0B\u5E8F-Mi\u4E91\u8BA1\u7B97\u7248\u6743\u6240\u6709"),
            React.createElement("span", { "css-role": "footerbar_bottom_text" }, "\u6DF1\u5733\u5E02Django\u79D1\u6280\u5F00\u53D1\u6709\u9650\u516C\u53F8 \u7CA4ICP\u59071508888\u53F7-8")));
    }
};
