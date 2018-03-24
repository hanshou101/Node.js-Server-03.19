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
var css = require("../../css/App.css");
exports.default = /** @class */ (function (_super) {
    __extends(RollPager, _super);
    function RollPager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RollPager.prototype.render = function () {
        return (<div className={css.rollpager}>

                <img src="/resources/scroller_1.jpg" alt="banner" width="100%"/>

            </div>);
    };
    return RollPager;
}(React.Component));
