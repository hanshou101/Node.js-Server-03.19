import React = require("react");

import bs_css = require('../../css/My_BootStrap.css')

export default class NavFooter extends React.Component {
    render() {


        var para_list = [
            {
                title: "服务",
                paras: [
                    '服务体系',
                    '解决方案',
                    '服务优势',
                    '合作流程',
                    '服务客户',
                ],
            },
            {
                title: "解决方案",
                paras: [
                    '零售电商',
                    '外卖点餐',
                    '视频教育',
                    '房产中介',
                ],
            },
            {
                title: "使用说明",
                paras: [
                    '小程序注册',
                    '使用江哥Django小程序',
                    '购买常见问题QA',
                ],
            },
            {
                title: "帮助支持",
                paras: [
                    '公众号平台',
                    '开发者工具',
                    '关于我们',
                ],
            },
            {
                title: "商务合作",
                paras: [
                    '邮箱：service@django.com',
                    '13725537676',
                    '座机：0755-88888888',
                    'QQ：888888888',
                    '地址：深圳市南山区深圳湾微众银行西向',
                    '星巴克旗舰店',
                ],
            },
        ]

        var item_divs = []

        para_list.forEach(
            (item, index) => {

                var title_color = index != para_list.length - 1 ? "white" : "#24B727"

                var para_color = index != para_list.length - 1 ? "#CCCCCC" : "white"

                var title_div = <span style={
                    { color: title_color }
                }   >{item.title}</span>

                var para_divs = []
                item.paras.forEach(
                    (para) => {
                        para_divs.push(
                            <span style={{
                                color: para_color,
                                fontSize: "0.5em",

                                marginTop: "0.75em",
                            }}   >{para}</span>
                        )
                    }
                )

                item_divs.push(
                    <div className={bs_css.flex_column} style={{
                        marginLeft: "3em",
                        marginRight: "3em",
                    }}       >
                        {title_div}
                        {para_divs}
                    </div>
                )
            }
        )


        return (
            <div className={bs_css.flex_column} style={{
                justifyContent: "space-between",
                alignItems: "center",

                width: "100%",
                backgroundColor: "#2E3033",
            }}         >

                <div className={bs_css.flex_row} style={{
                    justifyContent: "space-between",
                    alignItems: "flex-start",

                    marginTop: "3em",
                }}         >


                    <div className={bs_css.flex_column} style={{

                    }}   >

                        <span style={{
                            color: "white",
                            marginTop: "0.5em",
                        }}   >专注用户体验设计与开发</span>

                        <img src="/resources/qr_code.png" alt="网站二维码" style={{
                            width: "7.625em",
                            height: "7.625em",
                            marginTop: "0.5em",
                        }} />


                    </div>


                    {item_divs}

                </div>

                <span style={{
                    fontSize: "0.5em",
                    color: "#CCCCCC",

                    textAlign: "center",

                    marginTop:"3em",
                    marginBottom: "3em",
                }}   >
                    友情链接：Mi云 腾讯云教程网 腾讯云 微信公众平台<br /><br />Copyright © 2018-2018 www.django-win.com 江哥Django小程序-Mi云计算版权所有<br /><br />深圳市Django科技开发有限公司 粤ICP备1508888号-8
                    </span>



            </div>

        )
    }
}