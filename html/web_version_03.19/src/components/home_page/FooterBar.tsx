import React = require('react');
import css = require('../../css/App.css')


exports.default = class FooterBar extends React.Component {
    render() {

        var tab_list = [
            '服务',
            '解决方案',
            '使用说明',
            '帮助支持',
            '商务合作',
        ]

        var tab_divs = []

        var para_list = [

            [
                '服务体系',
                '解决方案',
                '服务优势',
                '合作流程',
                '服务客户',
            ],
            [
                '零售电商',
                '外卖点餐',
                '视频教育',
                '房产中介',
            ],
            [
                '小程序注册',
                '使用江哥Django小程序',
                '购买常见问题QA',
            ],
            [
                '公众号平台',
                '开发者工具',
                '关于我们',
            ],
            [
                '邮箱：service@django.com',
                '13725537676',
                '座机：0755-88888888',
                'QQ：888888888',
                '地址：深圳市南山区深圳湾微众银行西向',
                '星巴克旗舰店',
            ],

        ]

        // 外层的标题
        for (var i = 0; i < tab_list.length; i++) {

            //大标题的文字
            var tab = tab_list[i]

            var span_list = []

            //单次加入大标题的文字
            span_list.push(
                <span css-role="footerbar_tab_title">{tab}</span>
            )

            //内层的小标题
            for (var j = 0; j < para_list[i].length; j++) {
                //循环中加入小标题的文字
                span_list.push(
                    <span css-role="footerbar_tab_para">{para_list[i][j]}</span>
                )
            }

            //将这次获得的文字，加入tab_divs

            tab_divs.push(
                <div className={css.footerbar_paragraph}>{span_list}</div>
            )
        }

        return (
            <div className={css.footerbar_total}>

                <div className={css.footerbar_tab}>

                    <div className={css.footerbar_paragraph}>
                        <span css-role="footerbar_qrcode_title">专注用户体验设计与开发</span>
                        <img css-role="footerbar_qrcode_image" src="/resources/qr_code.png" alt="QRCode" />
                    </div>

                    {tab_divs}

                </div>

                <span css-role="footerbar_bottom_text">友情链接：Mi云 腾讯云教程网 腾讯云 微信公众平台</span>
                <span css-role="footerbar_bottom_text">Copyright © 2018-2018 www.django-win.com 江哥Django小程序-Mi云计算版权所有</span>
                <span css-role="footerbar_bottom_text">深圳市Django科技开发有限公司 粤ICP备1508888号-8</span>

            </div>
        )
    }
}