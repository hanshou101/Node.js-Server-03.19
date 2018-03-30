import React = require("react");
import bs_css = require('../../../css/My_BootStrap.css')

export default class SimpleIntro extends React.Component {
    render() {

        var title_size_ratio = 1.5

        var imgSrc = this.props['imgSrc']
        var title = this.props['title']
        var intro = this.props['intro']


        var text_span_width = (title as string).length * title_size_ratio

        return (
            <div className={bs_css.flex_row} style={{
                padding: "2em",
            }}>

                <img className="rounded-circle" src={imgSrc} alt="介绍图片" style={{
                    width: "7em",
                    height: '7em',
                }} />


                {/* 除了常规的竖排显示外，还添加-依据标题设定宽度-高度依据图片而定-内部内容向上下两端分布 */}
                <span className={bs_css.flex_column} style={{
                    justifyContent: "space-between",
                }}>
                    {/* <h1> */}
                    <span style={{
                        whiteSpace: "nowrap",
                        width: text_span_width + "em",
                        minWidth: "10em",
                    }}>
                        {title}
                    </span>
                    {/* </h1> */}


                    {/* 设定下面介绍文字，最多和上面标题一样宽 */}
                    <span style={{
                        whiteSpace: "pre-wrap",
                        width: text_span_width + "em",
                        minWidth: "10em",
                    }}>
                        {intro}
                    </span>

                </span>

            </div>
        )
    }
}