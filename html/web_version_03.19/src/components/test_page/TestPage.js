"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom"); //如果你要Router，必须添加histroy属性
var my_store = require('../../App.js').my_store;
var my_history = require('../../App.js').my_history;
var css = require('../../css/App.css');
var TestPage = /** @class */ (function (_super) {
    __extends(TestPage, _super);
    function TestPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestPage.prototype.render = function () {
        return <div>
            <div className={css.test}>
                <ol>
                    <li><react_router_dom_1.Link to="/">to 首页</react_router_dom_1.Link></li>
                    <li><react_router_dom_1.Link to="/about">to 关于</react_router_dom_1.Link></li>
                    <li><react_router_dom_1.Link to="/topics">to 主题</react_router_dom_1.Link></li>
                    <li><react_router_dom_1.Link to="/404">to 错误</react_router_dom_1.Link></li>
                    <li><react_router_dom_1.Link to="/test">to test</react_router_dom_1.Link></li>
                </ol>
            </div>

            <button onClick={function (event) {
            my_history.push('/test');
        }}>跳转test</button>

            <button onClick={function () {
            return my_store.dispatch({
                type: 'ADD',
                payload: 2
            });
        }}>切换回调：加法</button>

            <button onClick={function () {
            return my_store.dispatch({
                type: 'DEDUCE',
                payload: 1
            });
        }}>切换回调：减法</button>

            <button onClick={function () {
            return my_store.dispatch({
                type: 'MULTI',
                payload: 1.5
            });
        }}>切换回调：乘法</button>
        </div>;
    };
    return TestPage;
}(React.Component));
exports.default = TestPage;
