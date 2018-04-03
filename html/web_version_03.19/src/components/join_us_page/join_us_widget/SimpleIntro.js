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
var bs_css = require("../../../css/My_BootStrap.css");
var SimpleIntro = /** @class */ (function (_super) {
    __extends(SimpleIntro, _super);
    function SimpleIntro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleIntro.prototype.render = function () {
        var title_size_ratio = 1.5;
        var imgSrc = this.props['imgSrc'];
        var title = this.props['title'];
        var intro = this.props['intro'];
        var text_span_width = title.length * title_size_ratio;
        return (<div className={bs_css.flex_row} style={{
            padding: "2em",
        }}>

                <img className="rounded-circle" src={imgSrc} alt="介绍图片" style={{
            width: "7em",
            height: '7em',
        }}/>


                
                <span className={bs_css.flex_column} style={{
            justifyContent: "space-between",
        }}>
                    
                    <span style={{
            whiteSpace: "nowrap",
            width: text_span_width + "em",
            minWidth: "10em",
        }}>
                        {title}
                    </span>
                    


                    
                    <span style={{
            whiteSpace: "pre-wrap",
            width: text_span_width + "em",
            minWidth: "10em",
        }}>
                        {intro}
                    </span>

                </span>

            </div>);
    };
    return SimpleIntro;
}(React.Component));
exports.default = SimpleIntro;
