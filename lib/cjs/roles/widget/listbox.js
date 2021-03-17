"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const listboxRole = new widgetRole_1.default({
    name: 'listbox',
    description: 'A widget that allows the user to select one or more items from a list of choices.',
    superclassRoles: ['select'],
    relatedConcepts: [
        'list',
        {
            subject: '<select>',
            specification: 'HTML',
        },
    ],
    requiredOwnedElements: [['group', 'option'], 'option'],
    supportedAttributes: [
        'aria-errormessage',
        'aria-expanded',
        'aria-invalid',
        'aria-multiselectable',
        'aria-readonly',
        'aria-required',
    ],
    accessibleName: ['author'],
    nameRequired: true,
    implicitValues: [
        {
            attribute: 'aria-orientation',
            value: 'vertical',
        },
    ],
});
exports.default = listboxRole;
