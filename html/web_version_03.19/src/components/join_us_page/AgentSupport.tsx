import React = require('react');

import bs_css = require('../../css/My_BootStrap.css');

export default class AgentSupport extends React.Component {
    render() {

        var item_datas = [
            {
                imgSrc: "/resources/join_us/agent_support/support_1.png",
                title: "产品支持"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_2.png",
                title: "资源支持"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_3.png",
                title: "物料支持"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_4.png",
                title: "市场推广"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_5.png",
                title: "培训支持"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_6.png",
                title: "会议支持"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_7.png",
                title: "CRM系统"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_8.png",
                title: "专业客服"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_9.png",
                title: "方案支持"
            },
            {
                imgSrc: "/resources/join_us/agent_support/support_10.png",
                title: "驻地支持"
            },

        ]

        var item_divs = []

        item_datas.forEach(
            (item) => {
                item_divs.push(

                    <div className={bs_css.flex_column} style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}       >

                        <img src={item.imgSrc} alt="上佳的解决方案" style={{
                            width: "7.25em",
                            height: "7.25em",

                            marginLeft: "4em",
                            marginRight: "4em",
                            marginTop: "1em",
                        }} />

                        <span style={{
                            marginBottom: "3em",
                        }}   >{item.title}</span>

                    </div>



                )
            }
        )

        return (
            <div className={bs_css.flex_column} style={{
                justifyContent: "center",
                alignItems: "center",

                marginTop: "2em",
                paddingBottom: "2em",


                backgroundImage: "url('/resources/join_us/bg_2.jpg')",
                backgroundSize: "100% 150%",
            }}      >

                <h2 style={{
                    color: "white",

                    marginTop: "2em",
                }}   >代理商扶持</h2>

                {/* <span className="      text-muted      " style={{
                    marginTop: "2em",
                }}   >打通多渠道，掌握最新市场</span> */}

                <div className={bs_css.flex_row} style={{
                    justifyContent: "center",
                    alignItems: "center",

                    width: "78em",

                    marginTop: "2em",
                    //透明度++

                    backgroundColor: "rgba(166,217,166,0.4)",
                    zIndex: 9999

                }}      >

                    {item_divs}

                </div>

            </div>
        )
    }
}