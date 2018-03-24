import React = require('react');
import css = require('../../css/App.css')

exports.default = class TitleBar extends React.Component {
    render() {
        return (
            <div className={css.titlebar_total}>

                {/* 左边logo */}
                <div className={css.titlebar_left} >

                    <img css-role="titlebar_l_logo" alt="logo" src='/resources/logo_3.jpg' />

                    <span css-role="titlebar_l_text">江哥Django小程序</span>

                </div>


                {/* 右边文字 */}
                <div className={css.titlebar_right}>

                    <span css-role="titlebar_r_text_selected">首页</span>
                    <span css-role="titlebar_r_text">解决方案</span>
                    <span css-role="titlebar_r_text">代理加盟</span>
                    <span css-role="titlebar_r_text">使用说明</span>
                    <span css-role="titlebar_r_text">注册</span>
                    <span css-role="titlebar_r_text">登录</span>

                    <img css-role="titlebar_r_logo" src='/resources/search_2.jpg' alt="search" />


                </div>

            </div>
        )
    }
}