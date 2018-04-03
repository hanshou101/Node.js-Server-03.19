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
var HoverPic = /** @class */ (function (_super) {
    __extends(HoverPic, _super);
    function HoverPic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HoverPic.prototype.render = function () {
        var my_width = this.props['my_width'];
        var my_height = this.props['my_height'];
        var picA = this.props['picA'];
        var picB = this.props['picB'];
        return (<div style={{
            width: my_width,
            height: my_height,
            position: "relative"
        }}>



                <img src={picA} alt="底层图" width={my_width} height={my_height}/>

                <div style={{
            width: my_width,
            height: my_height,
            position: "absolute",
            left: "0px",
            top: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
        }}>

                    <img src={picB} alt="遮罩图" width="96px" height="96px" style={{ opacity: 0.4 }}/>

                </div>


            </div>);
    };
    return HoverPic;
}(React.Component));
exports.default = HoverPic;
