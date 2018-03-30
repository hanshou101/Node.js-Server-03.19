import React = require("react");
import bs_css = require('../../css/My_BootStrap.css')

//组件
var Banner = require('../join_us_page/Banner').default
var IntroPanel = require('./IntroPanel').default
var WhatsMiniApp = require("./WhatsMiniApp").default
var OurAdvantage = require('./OurAdvantage').default
var Solutions = require('./Solutions').default
var AgentSupport = require('./AgentSupport').default
var JoinSteps = require('./JoinSteps').default

export default class JoinUs extends React.Component {
    render() {
        return (
            <div className={bs_css.flex_column} style={{
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

            </div>
        )
    }
}