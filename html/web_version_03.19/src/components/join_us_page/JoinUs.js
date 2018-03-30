"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const bs_css = require("../../css/My_BootStrap.css");
//组件
var Banner = require('../join_us_page/Banner').default;
var IntroPanel = require('./IntroPanel').default;
var WhatsMiniApp = require("./WhatsMiniApp").default;
var OurAdvantage = require('./OurAdvantage').default;
var Solutions = require('./Solutions').default;
var AgentSupport = require('./AgentSupport').default;
var JoinSteps = require('./JoinSteps').default;
class JoinUs extends React.Component {
    render() {
        return (React.createElement("div", { className: bs_css.flex_column, style: {
                width: "100%",
                height: "atuo",
            } },
            React.createElement(Banner, null),
            React.createElement(IntroPanel, null),
            React.createElement(WhatsMiniApp, null),
            React.createElement(OurAdvantage, null),
            React.createElement(Solutions, null),
            React.createElement(AgentSupport, null),
            React.createElement(JoinSteps, null)));
    }
}
exports.default = JoinUs;
