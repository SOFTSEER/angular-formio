"use strict";
var _this = this;
var forms_1 = require('@angular/forms');
var bootstrap_templates_1 = require('../../templates/bootstrap.templates');
var index_1 = require('../index');
var hidden_1 = require('./hidden');
var formio_component_component_1 = require('../../formio-component.component');
var formio_events_1 = require('../../formio.events');
describe('HiddenComponent', function () {
    beforeEach(function () {
        index_1.RegisterComponents(bootstrap_templates_1.FORMIO_BOOTSTRAP);
        _this.form = new forms_1.FormGroup({});
        _this.events = new formio_events_1.FormioEvents();
    });
    // An easy method for getting new hidden settings.
    var getSettings = function (overrides) {
        var settings = {
            input: true,
            tableView: false,
            key: 'hidden',
            label: 'Hidden',
            protected: false,
            unique: true,
            persistent: true,
            type: 'hidden',
            conditional: {
                show: null,
                when: null,
                eq: ""
            }
        };
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
    it('Test FormioComponent for Hidden', function () {
        var component = getComponent({});
        expect(component.components.length).toEqual(1);
        expect(component.components[0] instanceof hidden_1.HiddenComponent).toEqual(true);
    });
    it('Check for type is hidden or not', function () {
        var settings = getSettings({
            type: 'hidden'
        });
        // Create the hidden component.
        var hidden = new hidden_1.HiddenComponent(_this.form, settings, _this.events);
        expect(hidden.settings.type).toEqual('hidden');
    });
    it('Should allow label value', function () {
        var settings = getSettings({
            label: 'Hidden'
        });
        // Create the hidden component.
        var hidden = new hidden_1.HiddenComponent(_this.form, settings, _this.events);
        expect(hidden.settings.label).toEqual('Hidden');
    });
    it('Should allow unique property', function () {
        var settings = getSettings({
            unique: true
        });
        // Create the hidden component.
        var hidden = new hidden_1.HiddenComponent(_this.form, settings, _this.events);
        expect(hidden.settings.unique).toEqual(true);
    });
    it('Should allow key', function () {
        var settings = getSettings({
            key: 'hidden'
        });
        // Create the hidden component.
        var hidden = new hidden_1.HiddenComponent(_this.form, settings, _this.events);
        expect(hidden.settings.key).toEqual('hidden');
    });
});
//# sourceMappingURL=hidden.spec.js.map