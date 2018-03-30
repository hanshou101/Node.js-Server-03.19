import React = require("react");
import bs_css = require('../../css/My_BootStrap.css')


export default class NavHeader extends React.Component {
    render() {
        return (
            <div className={bs_css.flex_row}
                style={{
                    padding: "0.5em",
                    height: "auto",
                    width: "100%",
                }}>

                <div className={bs_css.flex_row}
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    <h5>
                        <img className="img-thumbnail rounded-circle" src='/resources/logo_3.jpg' alt="test" style={{
                            width: "2em",
                            height: "2em",
                        }} />
                        {/* 此处， */}
                        <span className="text-default" style={{
                            fontWeight: "bolder",
                        }}>Django小程序</span>
                    </h5>


                </div>

                <div className={bs_css.flex_row}
                    style={{
                        flex: 1,
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >

                    <span className="text-success"
                        style={{
                            fontSize: "1em",
                            paddingRight: "3em",
                        }}
                    >首页</span>
                    <span className="text-primary"
                        style={{
                            fontSize: "1em",
                            paddingRight: "3em",
                        }}
                    >解决方案</span>
                    <span className="text-primary"
                        style={{
                            fontSize: "1em",
                            paddingRight: "3em",
                        }}>代理加盟</span>
                    <span className="text-primary"
                        style={{
                            fontSize: "1em",
                            paddingRight: "3em",
                        }}>使用说明</span>
                    <span className="text-primary"
                        style={{
                            fontSize: "1em",
                            paddingRight: "3em",
                        }}>注册</span>
                    <span className="text-primary"
                        style={{
                            fontSize: "1em",
                            paddingRight: "3em",
                        }}>登录</span>


                    {/* 字体图标，已经暂时废弃（在BS4.X版本里） */}
                    {/* <span className="glyphicon glyphicon-search"></span> */}

                </div>

            </div>
        )
    }
}