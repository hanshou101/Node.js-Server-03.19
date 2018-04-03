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
var NavHeader = /** @class */ (function (_super) {
    __extends(NavHeader, _super);
    function NavHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavHeader.prototype.render = function () {
        return (<div className={bs_css.flex_row} style={{
            padding: "0.5em",
            height: "auto",
            width: "100%",
        }}>

                <div className={bs_css.flex_row} style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>

                    <h5>
                        <img className="img-thumbnail rounded-circle" src='/resources/logo_3.jpg' alt="test" style={{
            width: "2em",
            height: "2em",
        }}/>
                        
                        <span className="text-default" style={{
            fontWeight: "bolder",
        }}>Django小程序</span>
                    </h5>


                </div>

                <div className={bs_css.flex_row} style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
        }}>

                    <span className="text-success" style={{
            fontSize: "1em",
            paddingRight: "3em",
        }}>首页</span>
                    <span className="text-primary" style={{
            fontSize: "1em",
            paddingRight: "3em",
        }}>解决方案</span>
                    <span className="text-primary" style={{
            fontSize: "1em",
            paddingRight: "3em",
        }}>代理加盟</span>
                    <span className="text-primary" style={{
            fontSize: "1em",
            paddingRight: "3em",
        }}>使用说明</span>
                    <span className="text-primary" style={{
            fontSize: "1em",
            paddingRight: "3em",
        }}>注册</span>
                    <span className="text-primary" style={{
            fontSize: "1em",
            paddingRight: "3em",
        }}>登录</span>


                    
                    

                </div>

            </div>);
    };
    return NavHeader;
}(React.Component));
exports.default = NavHeader;
