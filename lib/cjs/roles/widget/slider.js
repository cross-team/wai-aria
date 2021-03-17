"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const sliderRole = new widgetRole_1.default({
    name: 'slider',
    description: 'An input where the user selects a value from within a given range.',
    superclassRoles: ['input', 'range'],
    requiredAttributes: ['aria-valuenow'],
    supportedAttributes: [
        'aria-errormessage',
        'aria-haspopup',
        'aria-invalid',
        'aria-orientation',
        'aria-readonly',
        'aria-valuemax',
        'aria-valuemin',
    ],
    accessibleName: ['author'],
    nameRequired: true,
    presentationalChildren: true,
    implicitValues: [
        {
            attribute: 'aria-orientation',
            value: 'horizontal',
        },
        {
            attribute: 'aria-valuemin',
            value: '0',
        },
        {
            attribute: 'aria-valuemax',
            value: '100',
        },
    ],
});
exports.default = sliderRole;
