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
    __extends(Advantages, _super);
    function Advantages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Advantages.prototype.render = function () {
        var length = 14;
        var item_datas = [];
        var advantage_list = [
            <span css-role="advantages_item_text">制作周期短</span>,
            <span css-role="advantages_item_text">操作简单</span>,
            <span css-role="advantages_item_text">首页DIY</span>,
            <span css-role="advantages_item_text">设计精美</span>,
            <span css-role="advantages_item_text">专属售后服务</span>,
            <span css-role="advantages_item_text">独立后台</span>,
            <span css-role="advantages_item_text">数据统计分析</span>,
            <div className={css.advantages_a_item}><span css-role="advantages_item_text">多功能</span><span css-role="advantages_item_text">模板选择</span></div>,
            <div className={css.advantages_a_item}> <span css-role="advantages_item_text">支持不同</span> <span css-role="advantages_item_text">行业模式</span></div>,
            <span css-role="advantages_item_text">多种入口</span>,
            <span css-role="advantages_item_text">二维码推广</span>,
            <span css-role="advantages_item_text">系统稳定流畅</span>,
            <div className={css.advantages_a_item}> <span css-role="advantages_item_text">商品上传</span> <span css-role="advantages_item_text">无上限</span></div>,
            <span css-role="advantages_item_text">功能自由开发</span>,
        ];
        for (var i = 0; i < length; i++) {
            item_datas.push({
                advan: advantage_list[i],
                img_src: "/resources/advantages/icon_" + (i + 1) + ".png"
            });
        }
        var item_divs = [];
        var item_per_row = [];
        for (var j = 0; j < length; j++) {
            var advan = item_datas[j]['advan'];
            var img_src = item_datas[j]['img_src'];
            item_per_row.push(<div className={css.advantages_a_item}>
                    <img src={img_src} alt="advantage"/>
                    {advan}
                </div>);
            /**
             * 满7个元素，打包成1行
             * 如果是最后一个元素，也打包成1行
             */
            if (j % 7 == 6 || j == length - 1) {
                // 打包成1行
                item_divs.push(<div className={css.advantages_lists}>
                        {item_per_row}
                    </div>);
                //重置item_per_row容器
                item_per_row = [];
            }
        }
        return (<div className={css.advantages_total}>
                <span css-role="advantages_total_title">江哥Django-优势</span>
                <span css-role="advantages_total_sub_title">打通多渠道，掌握最新市场动脉</span>

                {item_divs}

            </div>);
    };
    return Advantages;
}(React.Component));
