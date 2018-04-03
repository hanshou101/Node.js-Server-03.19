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
var OurAdvantage = /** @class */ (function (_super) {
    __extends(OurAdvantage, _super);
    function OurAdvantage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OurAdvantage.prototype.render = function () {
        var item_datas = [
            {
                imgSrc: "/resources/join_us/our_advan_1.png",
                title: "新闻资讯"
            },
            {
                imgSrc: "/resources/join_us/our_advan_2.png",
                title: "平台新闻"
            },
            {
                imgSrc: "/resources/join_us/our_advan_3.png",
                title: "使用教程"
            },
        ];
        var item_divs = [];
        item_datas.forEach(function (item) {
            item_divs.push(<div className={bs_css.flex_column} style={{
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "5.25em",
                paddingRight: "5.25em",
            }}>

                        <img src={item.imgSrc} alt="潜在优势/巨大优势" style={{
                width: "5em",
                height: "4.5em",
            }}/>

                        <span style={{
                marginTop: "1.5em",
            }}>{item.title}</span>

                    </div>);
        });
        return (<div className={bs_css.flex_column} style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
        }}>

                <h2 style={{
            marginTop: "2em",
        }}>我们的优势</h2>

                <span className="      text-muted      " style={{
            marginTop: "2em",
            textAlign: "center",
        }}>小程序的目的是连接上亿用户+线下实体商家，把这上亿的微信用户引导到入驻小程序<br />的实体店铺去消费给用户带来生活便利的同时，也给入驻的商家带来巨大客源</span>

                <div className={bs_css.flex_row} style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2em",
        }}>

                    {item_divs}

                </div>


            </div>);
    };
    return OurAdvantage;
}(React.Component));
exports.default = OurAdvantage;
