"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var bs_css = require("../../css/My_BootStrap.css");
var SimpleIntro = require('./join_us_widget/SimpleIntro').default;
var IntroPanel = /** @class */ (function (_super) {
    __extends(IntroPanel, _super);
    function IntroPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntroPanel.prototype.render = function () {
        var item_data = [
            {
                title: "Django小程序平台介绍",
                intro: "Django小程序基于腾讯微信小程序API接口开发，具有目前30多种行业解决方案。",
                imgSrc: "/resources/join_us/intro_1.png",
            },
            {
                title: "微信小程序优势",
                intro: "无需注册、无须关注、无需下载、扫码直接体验、兼容性好。",
                imgSrc: "/resources/join_us/intro_2.png",
            },
        ];
        var item_divs = [];
        item_data.forEach(function (item) {
            item_divs.push(<SimpleIntro imgSrc={item.imgSrc} title={item.title} intro={item.intro}/>);
        });
        return (<div className={bs_css.flex_row} style={{
            justifyContent: "center",
            alignItems: "center",
            background: "white",
        }}>


                {item_divs}


            </div>);
    };
    return IntroPanel;
}(React.Component));
exports.default = IntroPanel;
