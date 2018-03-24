import React = require('react');
import css = require('../../css/App.css')

exports.default = class TechSupprt extends React.Component {
    render() {

        var length = 4;

        /**
         * 数据
         */
        var item_datas = []

        var cate_list = [
            "营销插件 - 拼团",
            "营销插件 - 秒杀",
            "营销插件 - 预约",
            "营销插件 - 三级分销",
        ]

        var intro_list = [
            [
                '支持团长开团',
                '人数达到即开团成功'
            ],
            [
                '支持整点秒杀',
                '进入商品界面直接抢购',
            ],
            [
                '支持一键预约',
                '查看订单、取消订单'
            ],
            [
                '支持提现、明细',
                '分销佣金、我的团队'
            ],
        ]


        for (let i = 0; i < length; i++) {
            item_datas.push({
                img_src: '/resources/tech_tedian_icon' + '/tedian_' + (i + 1) + '.png',
                cate: cate_list[i],
                intro_top: intro_list[i][0],
                intro_bottom: intro_list[i][1],
            })
        }

        /**
         * 视图
         */

        var item_divs = []

        for (var i = 0; i < 4; i++) {
            var img_src = item_datas[i]['img_src']
            var cate = item_datas[i]['cate']
            var intro_top = item_datas[i]['intro_top']
            var intro_bottom = item_datas[i]['intro_bottom']

            item_divs.push(
                <div className={css.tech_support_a_item}>
                    <img src={img_src} alt="feature" />
                    <span css-role="tech_support_item_top" >{cate}</span>
                    <span css-role="tech_support_item_bottom">{intro_top}</span>
                    <span css-role="tech_support_item_bottom">{intro_bottom}</span>
                </div>
            )
        }


        return (
            <div className={css.tech_support_total}>

                <span css-role="tech_support_total_title" >技术支持</span>
                <span css-role="tech_support_total__sub_title">强大的技术实力，安全稳定的系统支持</span>

                <div className={css.tech_support_lists}>

                    {item_divs}

                </div>

            </div>
        )
    }
}