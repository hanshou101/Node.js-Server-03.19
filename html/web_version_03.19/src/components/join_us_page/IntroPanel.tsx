import React = require("react");
import bs_css = require('../../css/My_BootStrap.css')



var SimpleIntro = require('./join_us_widget/SimpleIntro').default


export default class IntroPanel extends React.Component {
    render() {

        var item_data = [
            {
                title: "Django小程序平台介绍",
                intro: "Django小程序基于腾讯微信小程序API接口开发，具有目前30多种行业解决方案。",
                imgSrc: "/resources/join_us/intro_1.png",
            },
            {
                title: "微信小程序优势",
                intro: "无需注册、无须关注、无需下载、扫码直接体验、兼容性好。",
                imgSrc: "/resources/join_us/intro_2.png",
            },
        ]
        var item_divs = []

        item_data.forEach(
            (item) => {
                item_divs.push(
                    <SimpleIntro imgSrc={item.imgSrc} title={item.title} intro={item.intro} />
                )
            }
        )


        return (
            <div className={bs_css.flex_row} style={{
                justifyContent: "center",
                alignItems: "center",

                background: "white",
            }}>


                {item_divs}


            </div>
        )
    }
}