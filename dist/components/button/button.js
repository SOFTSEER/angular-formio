"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_1 = require('../base');
var components_1 = require('../components');
var ButtonComponent = (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent() {
        _super.apply(this, arguments);
    }
    return ButtonComponent;
}(base_1.BaseComponent));
exports.ButtonComponent = ButtonComponent;
var ButtonElement = (function (_super) {
    __extends(ButtonElement, _super);
    function ButtonElement() {
        _super.apply(this, arguments);
        this.disabled = false;
        this.submitting = false;
    }
    ButtonElement.prototype.ngOnInit = function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.component.settings.action === 'submit') {
            this.component.events.beforeSubmit.subscribe(function () {
                _this.disabled = _this.submitting = true;
            });
            this.component.events.onSubmit.subscribe(function () {
                _this.disabled = _this.submitting = false;
            });
        }
    };
    return ButtonElement;
}(base_1.BaseElement));
exports.ButtonElement = ButtonElement;
function ButtonField(template) {
    components_1.FormioComponents.register('button', ButtonComponent, ButtonElement, template.components.button);
    return ButtonElement;
}
exports.ButtonField = ButtonField;
//# sourceMappingURL=button.js.map