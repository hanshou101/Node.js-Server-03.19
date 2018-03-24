import React = require('react');
import css = require('../../css/App.css')

exports.default = class ProjectShows extends React.Component {
    render() {

        var length = 5
        var item_datas = []

        for (var i = 0; i < length; i++) {
            item_datas.push({
                img_src: '/resources/project_shows/project_' + (i + 1) + '.png'
            })
        }

        var item_divs = []

        for (var i = 0; i < length; i++) {
            var img_src = item_datas[i]['img_src']
            item_divs.push(
                <div css-role="project_shows_image_divs">
                    <img src={img_src} alt="project" />
                </div>
            )
        }

        return (
            <div className={css.project_shows_total}>
                <span css-role="project_shows_total_title">江哥Django-案例</span>
                <span css-role="project_shows_total_sub_title">我们积累了各行业丰富的案例和经验，五年来为200多家企业提升产品价值</span>

                <div className={css.project_shows_bitmaps}>
                    {item_divs}
                </div>

                <button css-role="project_shows_total_bottom_btn">查看更多 →</button>

            </div>
        )
    }
}