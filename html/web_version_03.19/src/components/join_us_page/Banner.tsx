import React = require("react");

import bs_css = require('../../css/My_BootStrap.css')

export default class Banner extends React.Component {
    render() {
        return (
            <div style={{
                display: "flex",
                direction: "column",
                justifyContent: "center",
                alignItems: "center",

                position: "relative",
                width: "100%",

                background: "black",
                padding: "0em",

            }}>

                <img src="/resources/join_us/banner.jpg" alt="横幅图片" style={{
                    maxWidth: "100%",
                    width: "100%",
                }} />

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",

                    position: "absolute",
                    left: "0em",
                    top: "0em",
                    width: "100%",
                    height: "100%",

                    padding: "2em",
                }}>

                    <h1>
                        <span style={{
                            color: "white",
                            fontSize: "1.75em",
                            fontWeight: "bolder",
                        }}>Django代理商
                        </span>
                    </h1>

                    <h1>
                        <span style={{
                            color: "white",
                            fontSize: "1.75em",
                            fontWeight: "bolder",
                        }}>火热招募中
                        </span>
                    </h1>

                    <span className="" style={{
                        color: "white",
                        marginTop: "1em"
                    }}>微信小程序市场  千亿市场等你来
                    </span>
                    <button className="btn btn-success" style={{
                        color: "white",
                        marginTop: "1.5em",
                    }}>成为代理商
                    </button>

                </div>

            </div>
        )
    }
}