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
var bs_css = require("../../css/My_BootStrap.css");
var Solutions = /** @class */ (function (_super) {
    __extends(Solutions, _super);
    function Solutions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Solutions.prototype.render = function () {
        var item_datas = [
            "/resources/join_us/solutions/solution_1.png",
            "/resources/join_us/solutions/solution_2.png",
            "/resources/join_us/solutions/solution_3.png",
            "/resources/join_us/solutions/solution_4.png",
            "/resources/join_us/solutions/solution_5.png",
            "/resources/join_us/solutions/solution_6.png",
            "/resources/join_us/solutions/solution_7.png",
            "/resources/join_us/solutions/solution_8.png",
        ];
        var item_divs = [];
        item_datas.forEach(function (item) {
            item_divs.push(<img src={item} alt="上佳的解决方案" style={{
                width: "17em",
                height: "17em",
                margin: "1em",
            }}/>);
        });
        return (<div className={bs_css.flex_column} style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2em",
            paddingBottom: "2em",
        }}>

                <h2>解决方案</h2>
                <span className="      text-muted      " style={{
            marginTop: "2em",
        }}>打通多渠道，掌握最新市场</span>

                <div className={bs_css.flex_row} style={{
            width: "76em"
        }}>

                    {item_divs}

                </div>

            </div>);
    };
    return Solutions;
}(React.Component));
exports.default = Solutions;
