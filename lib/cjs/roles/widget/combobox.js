"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const comboboxRole = new widgetRole_1.default({
    name: 'combobox',
    description: 'An input that controls another element, such as a listbox or grid, that can dynamically pop up to help the user set the value of the input.',
    superclassRoles: ['input'],
    relatedConcepts: [
        {
            subject: '<select>',
            specification: 'HTML',
        },
    ],
    requiredAttributes: ['aria-controls', 'aria-expanded'],
    supportedAttributes: [
        'aria-activedescendant',
        'aria-autocomplete',
        'aria-errormessage',
        'aria-haspopup',
        'aria-invalid',
        'aria-readonly',
        'aria-required',
    ],
    accessibleName: ['author'],
    nameRequired: true,
    implicitValues: [
        {
            attribute: 'aria-haspopup',
            value: 'listbox',
        },
    ],
});
exports.default = comboboxRole;
