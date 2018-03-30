import React = require('react');

import bs_css = require('../../css/My_BootStrap.css');

export default class Solutions extends React.Component {
    render() {

        var item_datas = [
            "/resources/join_us/solutions/solution_1.png",
            "/resources/join_us/solutions/solution_2.png",
            "/resources/join_us/solutions/solution_3.png",
            "/resources/join_us/solutions/solution_4.png",
            "/resources/join_us/solutions/solution_5.png",
            "/resources/join_us/solutions/solution_6.png",
            "/resources/join_us/solutions/solution_7.png",
            "/resources/join_us/solutions/solution_8.png",
        ]

        var item_divs = []

        item_datas.forEach(
            (item) => {
                item_divs.push(
                    <img src={item} alt="上佳的解决方案" style={{
                        width: "17em",
                        height: "17em",

                        margin: "1em",
                    }} />
                )
            }
        )

        return (
            <div className={bs_css.flex_column} style={{
                justifyContent: "center",
                alignItems: "center",

                marginTop: "2em",
                paddingBottom: "2em",
            }}      >

                <h2>解决方案</h2>
                <span className="      text-muted      " style={{
                    marginTop: "2em",
                }}   >打通多渠道，掌握最新市场</span>

                <div className={bs_css.flex_row} style={{
                    width: "76em"
                }}      >

                    {item_divs}

                </div>

            </div>
        )
    }
}