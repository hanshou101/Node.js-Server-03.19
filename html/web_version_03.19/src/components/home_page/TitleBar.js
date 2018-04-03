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
var css = require("../../css/App.css");
exports.default = /** @class */ (function (_super) {
    __extends(TitleBar, _super);
    function TitleBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TitleBar.prototype.render = function () {
        return (<div className={css.titlebar_total}>

                
                <div className={css.titlebar_left}>

                    <img css-role="titlebar_l_logo" alt="logo" src='/resources/logo_3.jpg'/>

                    <span css-role="titlebar_l_text">江哥Django小程序</span>

                </div>


                
                <div className={css.titlebar_right}>

                    <span css-role="titlebar_r_text_selected">首页</span>
                    <span css-role="titlebar_r_text">解决方案</span>
                    <span css-role="titlebar_r_text">代理加盟</span>
                    <span css-role="titlebar_r_text">使用说明</span>
                    <span css-role="titlebar_r_text">注册</span>
                    <span css-role="titlebar_r_text">登录</span>

                    <img css-role="titlebar_r_logo" src='/resources/search_2.jpg' alt="search"/>


                </div>

            </div>);
    };
    return TitleBar;
}(React.Component));
