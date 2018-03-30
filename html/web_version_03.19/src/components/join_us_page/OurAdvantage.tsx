import React = require('react');

import bs_css = require('../../css/My_BootStrap.css');

export default class OurAdvantage extends React.Component {
    render() {


        var item_datas = [
            {
                imgSrc: "/resources/join_us/our_advan_1.png",
                title: "新闻资讯"
            },
            {
                imgSrc: "/resources/join_us/our_advan_2.png",
                title: "平台新闻"
            },
            {
                imgSrc: "/resources/join_us/our_advan_3.png",
                title: "使用教程"
            },
        ]

        var item_divs = []

        item_datas.forEach(
            (item) => {
                item_divs.push(
                    <div className={bs_css.flex_column} style={{
                        justifyContent: "center",
                        alignItems: "center",

                        paddingLeft: "5.25em",
                        paddingRight: "5.25em",
                    }}         >

                        <img src={item.imgSrc} alt="潜在优势/巨大优势" style={{
                            width: "5em",
                            height: "4.5em",
                        }} />

                        <span style={{
                            marginTop: "1.5em",
                        }}    >{item.title}</span>

                    </div>
                )
            }
        )





        return (
            <div className={bs_css.flex_column} style={{
                justifyContent: "center",
                alignItems: "center",

                backgroundColor: "white",
            }}   >

                <h2 style={{
                    marginTop: "2em",
                }}    >我们的优势</h2>

                <span className="      text-muted      " style={{
                    marginTop: "2em",

                    textAlign: "center",
                }}
                >小程序的目的是连接上亿用户+线下实体商家，把这上亿的微信用户引导到入驻小程序<br />的实体店铺去消费给用户带来生活便利的同时，也给入驻的商家带来巨大客源</span>

                <div className={bs_css.flex_row} style={{
                    justifyContent: "center",
                    alignItems: "center",

                    marginTop: "2em",
                }}     >

                    {item_divs}

                </div>


            </div>
        )
    }
}