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
var TitleBar = require('./TitleBar').default;
var RollPager = require('./RollPager').default;
var TechSupport = require('./TechSupport').default;
var Solutions = require('./Solutions').default;
var Advantages = require('./Advantages').default;
var ProjectShows = require('./ProjectShows').default;
var ProService = require('./ProService').default;
var FooterBar = require('./FooterBar').default;
var css = require("../../css/App.css");
var React = require("react");
exports.default = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (
        // <div>
        <div className={css.column}>

                <TitleBar>  </TitleBar>

                <RollPager>     </RollPager>
                <TechSupport>   </TechSupport>

                <Solutions>     </Solutions>
                <Advantages>     </Advantages>
                <ProjectShows>   </ProjectShows>
                <ProService>    </ProService>
                <FooterBar>     </FooterBar>






            </div>);
    };
    return Home;
}(React.Component));
