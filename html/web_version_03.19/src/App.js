"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 原生React区域
 */
const React = require("react");
const ReactDOM = require("react-dom");
/**
 * Redux区域
 */
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
/**
 * Router区域
 */
// import { Router, Route  /* , browserHistory */ } from 'react-router'    //react-router-dom更为强大，先进
const react_router_dom_1 = require("react-router-dom"); //如果你要Router，必须添加histroy属性
const react_router_redux_1 = require("react-router-redux");
/**
 * 用Router_4.0+history+Redux，实现“时间旅行”
 */
const react_router_redux_2 = require("react-router-redux"); //引入时间旅行的新组件
const createBrowserHistory_1 = require("history/createBrowserHistory");
/**
 * 自己写的Reducer
 */
var my_reducer_list = require('./redux_logic/Reducers');
/**
 * [在store建立之前]
 * 创建“时间旅行”的history历史。（比如浏览器的历史进程）
 */
const history = createBrowserHistory_1.default();
/**
 * [在store建立之前]
 * 创建中间件，进行“时间旅行”的Navigatioin导航的拦截和分发Actions操作
 */
const middleware = react_router_redux_2.routerMiddleware(history);
/**
 * 用Reducer，初始化Store
 */
const my_store = redux_1.createStore(redux_1.combineReducers(Object.assign({}, my_reducer_list, { routing: react_router_redux_1.routerReducer })), 
//额外功能：这里是和“时间旅行”的history相关的
redux_1.applyMiddleware(middleware));
/**
 * 自己的一些Component
 */
var Home = require('./components/home_page/Home').default;
var TestPage = require('./components/test_page/TestPage').default;
var NavHeader = require('./components/usual_widget/NavHeader').default;
var NavFooter = require('./components/usual_widget/NavFooter').default;
var JoinUs = require('./components/join_us_page/JoinUs').default;
var css = require('./css/App.css');
/**
 * 进行渲染：
 * 1.最外层，Provider，参数设置为自己的store
 * 2.
 * 3.
 */
var render_fun = () => ReactDOM.render(React.createElement(react_redux_1.Provider, { store: my_store },
    React.createElement(react_router_redux_2.ConnectedRouter, { history: history },
        React.createElement("div", null,
            React.createElement("nav", { className: "navbar navbar-default navbar-fixed-top" },
                React.createElement(NavHeader, null)),
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/join_us", component: JoinUs }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/test", component: Home }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: '/', component: TestPage }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/btn_1", component: NavHeader }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/btn_2", component: NavFooter }),
                React.createElement(react_router_dom_1.Route, { path: "/404", component: (props) => { return React.createElement("h1", null, "404"); } }),
                React.createElement(react_router_dom_1.Redirect, { to: "/404" })),
            React.createElement("nav", { className: "navbar navbar-default navbar-fixed-bottom", style: {
                    padding: "0em",
                } },
                React.createElement(NavFooter, null))))), document.getElementById('content'));
render_fun(); //手动调用整体渲染方法。
/**
 * 为Store，添加每次dispatch分发时的触发回调函数
 */
const unsubscribe_fun = my_store.subscribe(() => {
    render_fun();
    log_fun();
});
// unsubscribe_fun()               //手动解除Store的触发回调函数。
/**
 * State的Log日志。
 */
var log_fun = () => {
    const cur_state = my_store.getState();
    console.log("new state : " + JSON.stringify(cur_state["math"]));
};
exports.my_store = my_store;
exports.my_history = history;
