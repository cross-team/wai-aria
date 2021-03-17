"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const textboxRole = new widgetRole_1.default({
    name: 'textbox',
    description: 'A type of input that allows free-form text as its value.',
    superclassRoles: ['input'],
    subclassRoles: ['searchbox'],
    relatedConcepts: [
        {
            subject: '<textarea>',
            specification: 'HTML',
        },
        {
            subject: '<input[type="text"]>',
            specification: 'HTML',
        },
    ],
    supportedAttributes: [
        'aria-activedescendant',
        'aria-autocomplete',
        'aria-errormessage',
        'aria-haspopup',
        'aria-invalid',
        'aria-multiline',
        'aria-placeholder',
        'aria-readonly',
        'aria-required',
    ],
    accessibleName: ['author'],
    nameRequired: true,
});
exports.default = textboxRole;
