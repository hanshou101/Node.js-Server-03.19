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
    __extends(ProjectShows, _super);
    function ProjectShows() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProjectShows.prototype.render = function () {
        var length = 5;
        var item_datas = [];
        for (var i = 0; i < length; i++) {
            item_datas.push({
                img_src: '/resources/project_shows/project_' + (i + 1) + '.png'
            });
        }
        var item_divs = [];
        for (var i = 0; i < length; i++) {
            var img_src = item_datas[i]['img_src'];
            item_divs.push(<div css-role="project_shows_image_divs">
                    <img src={img_src} alt="project"/>
                </div>);
        }
        return (<div className={css.project_shows_total}>
                <span css-role="project_shows_total_title">江哥Django-案例</span>
                <span css-role="project_shows_total_sub_title">我们积累了各行业丰富的案例和经验，五年来为200多家企业提升产品价值</span>

                <div className={css.project_shows_bitmaps}>
                    {item_divs}
                </div>

                <button css-role="project_shows_total_bottom_btn">查看更多 →</button>

            </div>);
    };
    return ProjectShows;
}(React.Component));
