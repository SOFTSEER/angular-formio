"use strict";
var _this = this;
var forms_1 = require('@angular/forms');
var bootstrap_templates_1 = require('../../templates/bootstrap.templates');
var index_1 = require('../index');
var checkbox_1 = require('./checkbox');
var formio_component_component_1 = require('../../formio-component.component');
var formio_events_1 = require('../../formio.events');
var checkbox_2 = require('../../fixtures/fields/checkbox');
describe('CheckBoxComponent', function () {
    beforeEach(function () {
        index_1.RegisterComponents(bootstrap_templates_1.FORMIO_BOOTSTRAP);
        _this.form = new forms_1.FormGroup({});
        _this.events = new formio_events_1.FormioEvents();
    });
    // An easy method for getting new checkbox settings.
    var getSettings = function (overrides) {
        var settings = checkbox_2.CHECKBOX('checkbox', 'Checkbox');
        Object.assign(settings, overrides);
        return settings;
    };
    var getComponent = function (overrides) {
        var settings = getSettings(overrides);
        var component = new formio_component_component_1.FormioComponentComponent(_this.events);
        component.component = settings;
        component.form = _this.form;
        component.ngOnInit();
        return component;
    };
    it('Test FormioComponent for CheckBox', function () {
        var component = getComponent({});
        expect(component.components.length).toEqual(1);
        expect(component.components[0] instanceof checkbox_1.CheckBoxComponent).toEqual(true);
    });
    it('Should allow default value', function () {
        var settings = getSettings({
            defaultValue: false
        });
        // Create the checkbox component.
        var checkbox = new checkbox_1.CheckBoxComponent(_this.form, settings, _this.events);
        expect(checkbox.defaultValue).toEqual(false);
        expect(checkbox.control.value).toEqual(false);
    });
    it('Should allow label value', function () {
        var settings = getSettings({
            label: 'CheckBox'
        });
        // Create the checkbox component.
        var checkbox = new checkbox_1.CheckBoxComponent(_this.form, settings, _this.events);
        expect(checkbox.label).toEqual('CheckBox');
    });
    it('Should allow check box with required', function () {
        var settings = getSettings({
            required: true
        });
        // Create the checkbox component.
        var checkbox = new checkbox_1.CheckBoxComponent(_this.form, settings, _this.events);
        expect(checkbox.settings.required).toEqual(true);
    });
});
//# sourceMappingURL=checkbox.spec.js.map