"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const spinbuttonRole = new widgetRole_1.default({
    name: 'spinbutton',
    description: 'A form of range that expects the user to select from among discrete choices.',
    superclassRoles: ['composite', 'input', 'range'],
    supportedAttributes: [
        'aria-errormessage',
        'aria-invalid',
        'aria-readonly',
        'aria-required',
        'aria-valuemax',
        'aria-valuemin',
        'aria-valuenow',
        'aria-valuetext',
    ],
    accessibleName: ['author'],
    nameRequired: true,
    implicitValues: [
        {
            attribute: 'aria-valuemin',
            value: 'none',
        },
        {
            attribute: 'aria-valuemax',
            value: 'none',
        },
        {
            attribute: 'aria-valuenow',
            value: 'none',
        },
    ],
});
exports.default = spinbuttonRole;
