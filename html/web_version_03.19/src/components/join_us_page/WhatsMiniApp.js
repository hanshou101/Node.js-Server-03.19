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
var WhatsMiniApp = /** @class */ (function (_super) {
    __extends(WhatsMiniApp, _super);
    function WhatsMiniApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WhatsMiniApp.prototype.render = function () {
        return (<div className={bs_css.flex_column} style={{
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
        }}>

                <h2 style={{
            marginTop: "2em",
        }}>小程序是什么</h2>

                <span className="  text-muted " style={{
            marginTop: "2em",
            textAlign: "center",
        }}>
                    小程序的目的是连接上亿用户+线下实体商家，把这上亿的微信用户引导到入驻小程序
                    <br />
                    的实体店铺去消费给用户带来生活便利的同时，也给入驻的商家带来巨大客源
                </span>

                <img src="/resources/join_us/whats_mini_app.png" alt="小程序是什么" style={{
            marginTop: "2em",
        }}/>


            </div>);
    };
    return WhatsMiniApp;
}(React.Component));
exports.default = WhatsMiniApp;
