import React = require('react');
import css = require('../../css/App.css')

exports.default = class RollPager extends React.Component {
    render() {
        return (
            <div className={css.rollpager}>

                <img src="/resources/scroller_1.jpg" alt="banner" width="100%" />

            </div>
        )
    }
}