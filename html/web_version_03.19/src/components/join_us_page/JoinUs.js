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
//组件
var Banner = require('../join_us_page/Banner').default;
var IntroPanel = require('./IntroPanel').default;
var WhatsMiniApp = require("./WhatsMiniApp").default;
var OurAdvantage = require('./OurAdvantage').default;
var Solutions = require('./Solutions').default;
var AgentSupport = require('./AgentSupport').default;
var JoinSteps = require('./JoinSteps').default;
var JoinUs = /** @class */ (function (_super) {
    __extends(JoinUs, _super);
    function JoinUs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JoinUs.prototype.render = function () {
        return (<div className={bs_css.flex_column} style={{
            width: "100%",
            height: "atuo",
        }}>

                <Banner />

                <IntroPanel />

                <WhatsMiniApp />

                <OurAdvantage />

                <Solutions />

                <AgentSupport />

                <JoinSteps />

            </div>);
    };
    return JoinUs;
}(React.Component));
exports.default = JoinUs;
