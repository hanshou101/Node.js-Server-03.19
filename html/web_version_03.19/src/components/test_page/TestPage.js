"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom"); //如果你要Router，必须添加histroy属性
var my_store = require('../../App.js').my_store;
var my_history = require('../../App.js').my_history;
var css = require('../../css/App.css');
class TestPage extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("div", { className: css.test },
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/" }, "to \u9996\u9875")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/about" }, "to \u5173\u4E8E")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/topics" }, "to \u4E3B\u9898")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/404" }, "to \u9519\u8BEF")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/test" }, "to test")))),
            React.createElement("button", { onClick: (event) => {
                    my_history.push('/test');
                } }, "\u8DF3\u8F6Ctest"),
            React.createElement("button", { onClick: () => my_store.dispatch({
                    type: 'ADD',
                    payload: 2
                }) }, "\u5207\u6362\u56DE\u8C03\uFF1A\u52A0\u6CD5"),
            React.createElement("button", { onClick: () => my_store.dispatch({
                    type: 'DEDUCE',
                    payload: 1
                }) }, "\u5207\u6362\u56DE\u8C03\uFF1A\u51CF\u6CD5"),
            React.createElement("button", { onClick: () => my_store.dispatch({
                    type: 'MULTI',
                    payload: 1.5
                }) }, "\u5207\u6362\u56DE\u8C03\uFF1A\u4E58\u6CD5"));
    }
}
exports.default = TestPage;
