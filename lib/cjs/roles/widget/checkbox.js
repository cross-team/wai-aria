"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const checkboxRole = new widgetRole_1.default({
    name: 'checkbox',
    description: 'A checkable input that has three possible values: true, false, or mixed.',
    superclassRoles: ['input'],
    subclassRoles: ['switch'],
    relatedConcepts: [
        {
            subject: '<input[type="checkbox"]>',
            specification: 'HTML',
        },
        'option',
    ],
    requiredAttributes: ['aria-checked'],
    supportedAttributes: [
        'aria-errormessage',
        'aria-expanded',
        'aria-invalid',
        'aria-readonly',
        'aria-required',
    ],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
    presentationalChildren: true,
});
exports.default = checkboxRole;
