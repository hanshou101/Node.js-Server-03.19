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
var JoinSteps = /** @class */ (function (_super) {
    __extends(JoinSteps, _super);
    function JoinSteps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JoinSteps.prototype.render = function () {
        var item_divs = [];
        var item_datas = [
            {
                imgSrc: "/resources/join_us/steps/step_1.png",
                title: "咨询沟通",
            },
            {
                imgSrc: "/resources/join_us/steps/next.png",
            },
            {
                imgSrc: "/resources/join_us/steps/step_2.png",
                title: "产品了解",
            },
            {
                imgSrc: "/resources/join_us/steps/next.png",
            },
            {
                imgSrc: "/resources/join_us/steps/step_3.png",
                title: "签订协议",
            },
            {
                imgSrc: "/resources/join_us/steps/next.png",
            },
            {
                imgSrc: "/resources/join_us/steps/step_4.png",
                title: "代理支持",
            },
        ];
        item_datas.forEach(function (item) {
            if (item.title) {
                item_divs.push(<div className={bs_css.flex_column} style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>

                            <img src={item.imgSrc} alt="规范步骤" style={{
                    height: "8em",
                    width: "8em",
                }}/>

                            <span style={{
                    marginTop: "1em",
                    marginBottom: "2.5em",
                }}>{item.title}</span>

                        </div>);
            }
            else {
                item_divs.push(<div className={bs_css.flex_column} style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>

                            <img src={item.imgSrc} alt="箭头" style={{
                    marginBottom: "2em",
                    width: "2.375em",
                    height: "1em",
                    marginLeft: "2em",
                    marginRight: "2em",
                }}/>

                        </div>);
            }
        });
        return (<div className={bs_css.flex_column} style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
        }}>

                <h2 style={{
            marginTop: "2em",
        }}>代理加入流程</h2>

                <div className={bs_css.flex_row} style={{
            marginTop: "2em",
        }}>

                    {item_divs}

                </div>

            </div>);
    };
    return JoinSteps;
}(React.Component));
exports.default = JoinSteps;
