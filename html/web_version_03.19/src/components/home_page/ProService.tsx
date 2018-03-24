import React = require('react');
import css = require('../../css/App.css')

exports.default = class ProService extends React.Component {
    render() {




        var length = 9

        var category_list = [
            '注册账号',
            '选择模板',
            '配置信息',
            '提交审核',
            '发布上线',
        ]
        var item_datas = []

        for (var i = 0; i < length; i++) {

            //上图下文的情况
            if (i % 2 == 0) {
                var index = i / 2
                item_datas.push({
                    img_src: '/resources/pro_service/gaoduan_' + (index + 1) + '.png',
                    cate: category_list[index]
                })
            }
            //仅仅是箭头的情况
            else {
                item_datas.push({
                    img_src: '/resources/pro_service/next.png'
                })
            }
        }

        var item_divs = []

        for (var j = 0; j < length; j++) {

            var pojo = item_datas[j]

            //如果是上图下文的情况
            if (pojo['cate']) {
                item_divs.push(
                    <div className={css.pro_service_a_item}>
                        <img src={pojo['img_src']} alt="pro_service" />
                        <span css-role="pro_service_item_text">{pojo['cate']}</span>
                    </div>
                )

            }
            //如果是箭头的情况
            else {
                item_divs.push(
                    <img css-role="pro_service_item_arrow" src={pojo['img_src']} alt="next" />
                )
            }
        }

        return (
            <div className={css.pro_service_total} >
                <span css-role="pro_service_total_title">高端定制开发 私有化部署</span>

                <div className={css.pro_service_lists}>
                    {item_divs}
                </div>

            </div>
        )
    }
}