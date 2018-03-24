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
    __extends(TechSupprt, _super);
    function TechSupprt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TechSupprt.prototype.render = function () {
        var length = 4;
        /**
         * 数据
         */
        var item_datas = [];
        var cate_list = [
            "营销插件 - 拼团",
            "营销插件 - 秒杀",
            "营销插件 - 预约",
            "营销插件 - 三级分销",
        ];
        var intro_list = [
            [
                '支持团长开团',
                '人数达到即开团成功'
            ],
            [
                '支持整点秒杀',
                '进入商品界面直接抢购',
            ],
            [
                '支持一键预约',
                '查看订单、取消订单'
            ],
            [
                '支持提现、明细',
                '分销佣金、我的团队'
            ],
        ];
        for (var i_1 = 0; i_1 < length; i_1++) {
            item_datas.push({
                img_src: '/resources/tech_tedian_icon' + '/tedian_' + (i_1 + 1) + '.png',
                cate: cate_list[i_1],
                intro_top: intro_list[i_1][0],
                intro_bottom: intro_list[i_1][1],
            });
        }
        /**
         * 视图
         */
        var item_divs = [];
        for (var i = 0; i < 4; i++) {
            var img_src = item_datas[i]['img_src'];
            var cate = item_datas[i]['cate'];
            var intro_top = item_datas[i]['intro_top'];
            var intro_bottom = item_datas[i]['intro_bottom'];
            item_divs.push(<div className={css.tech_support_a_item}>
                    <img src={img_src} alt="feature"/>
                    <span css-role="tech_support_item_top">{cate}</span>
                    <span css-role="tech_support_item_bottom">{intro_top}</span>
                    <span css-role="tech_support_item_bottom">{intro_bottom}</span>
                </div>);
        }
        return (<div className={css.tech_support_total}>

                <span css-role="tech_support_total_title">技术支持</span>
                <span css-role="tech_support_total__sub_title">强大的技术实力，安全稳定的系统支持</span>

                <div className={css.tech_support_lists}>

                    {item_divs}

                </div>

            </div>);
    };
    return TechSupprt;
}(React.Component));
