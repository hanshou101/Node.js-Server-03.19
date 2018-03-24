import React = require('react');
import css = require('../../css/App.css')
var HoverPic = require('../widget/HoverPic').default


exports.default = class Solutions extends React.Component {
    render() {

        var length = 6

        var item_datas = []
        var category_list = ['分销商城', '餐饮外卖', '宾馆酒店', '景点旅游', '美容美妆', '教育视频']
        var introduce_list = [
            '分销、秒杀、拼团、预约、优惠券、积分',
            '通过小程序实现点餐、外卖、预约等功能',
            '预定酒店、支持节假日房价管控',
            '景点展示、门票预订、签证办理',
            '美妆线上商城、支持美容预约',
            '通过小程序实现音视频点播教育培训',
        ]

        for (var i = 0; i < length; i++) {
            item_datas.push({
                cate: category_list[i],
                intro: introduce_list[i],
                img_src: "/resources/solutions/case_" + (i + 1) + ".jpg",
                hover_icon_src: "/resources/solutions/hover_" + (i + 1) + ".png",
            })
        }

        var item_divs = []


        var item_per_row = []

        for (var j = 0; j < length; j++) {

            var img_src = item_datas[j]['img_src']
            var hover_icon_src = item_datas[j]['hover_icon_src']
            var cate = item_datas[j]['cate']
            var intro = item_datas[j]['intro']

            item_per_row.push(
                <div className={css.solutions_a_item}>
                    <HoverPic my_width="343px" my_height="238px" picA={img_src} picB={hover_icon_src} />
                    <span css-role="solutions_item_text_top">{cate}</span>
                    <span css-role="solutions_item_text_bottom">{intro}</span>
                    <button css-role="solutions_item_button">七天体验： 1元</button>
                </div>
            )

            /**
             * 如果数满了3个元素，打包成1行。
             * 如果是最后1个元素，打包成1行。
             */
            if (j % 3 == 2 || j == length - 1) {
                //打包成1行
                item_divs.push(
                    <div className={css.solutions_lists}>
                        {item_per_row}
                    </div>
                )
                //重置item_per_row容器
                item_per_row = []
            }
        }

        return (


            <div className={css.solutions_total}>

                <span css-role="solutions_total_title">江哥Django-解决方案</span>
                <span css-role="solutions_total_sub_title">微信小程序提供全方位的小程序全新解决方案</span>
                <span css-role="solutions_total_sub_title">主要包括电商、O2O服务、餐饮外卖、预约排队、运动健身、婚纱摄影等</span>

                <div css-role="solutions_gap_div"></div>

                {item_divs}


                <button css-role="solutions_total_bottom_btn">查看更多 →</button>

            </div>
        )
    }
}