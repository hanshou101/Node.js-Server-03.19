import React = require("react");
import { HashRouter, /* Router, */ Route, Link, Switch, Redirect } from 'react-router-dom'    //如果你要Router，必须添加histroy属性

var my_store = require('../../App.js').my_store
var my_history = require('../../App.js').my_history
var css = require('../../css/App.css')

export default class TestPage extends React.Component {
    render() {
        return <div>
            <div className={css.test}>
                <ol>
                    <li><Link to="/">to 首页</Link></li>
                    <li><Link to="/about" >to 关于</Link></li>
                    <li><Link to="/topics" >to 主题</Link></li>
                    <li><Link to="/404" >to 错误</Link></li>
                    <li><Link to="/test" >to test</Link></li>
                </ol>
            </div>

            <button onClick={(event) => {
                my_history.push('/test')
            }}>跳转test</button>

            <button onClick={() =>
                my_store.dispatch({
                    type: 'ADD',
                    payload: 2
                })
            }>切换回调：加法</button>

            <button onClick={() =>
                my_store.dispatch({
                    type: 'DEDUCE',
                    payload: 1
                })
            }>切换回调：减法</button>

            <button onClick={() =>
                my_store.dispatch({
                    type: 'MULTI',
                    payload: 1.5
                })
            }>切换回调：乘法</button>
        </div>
    }
}