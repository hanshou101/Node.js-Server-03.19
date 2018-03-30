import React = require('react');

import bs_css = require('../../css/My_BootStrap.css');

export default class WhatsMiniApp extends React.Component {
    render() {
        return (
            <div className={bs_css.flex_column} style={{
                justifyContent: "flex-end",
                alignItems: "center",

                width: "100%",
            }}      >

                <h2 style={{
                    marginTop: "2em",
                }}    >小程序是什么</h2>

                <span className="  text-muted " style={{
                    marginTop: "2em",

                    textAlign: "center",
                }}   >
                    小程序的目的是连接上亿用户+线下实体商家，把这上亿的微信用户引导到入驻小程序
                    <br />
                    的实体店铺去消费给用户带来生活便利的同时，也给入驻的商家带来巨大客源
                </span>

                <img src="/resources/join_us/whats_mini_app.png" alt="小程序是什么" style={{
                    marginTop: "2em",
                }} />


            </div>
        )
    }
}
