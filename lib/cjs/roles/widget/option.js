"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const optionRole = new widgetRole_1.default({
    name: 'option',
    description: 'A selectable item in a listbox.',
    superclassRoles: ['input'],
    subclassRoles: ['treeitem'],
    baseConcepts: [
        {
            subject: '<option>',
            specification: 'HTML',
        },
    ],
    relatedConcepts: ['listitem'],
    requiredContextRoles: ['group', 'listbox'],
    requiredAttributes: ['aria-selected'],
    supportedAttributes: ['aria-checked', 'aria-posinset', 'aria-setsize'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
    presentationalChildren: true,
    implicitValues: [
        {
            attribute: 'aria-selected',
            value: 'false',
        },
    ],
});
exports.default = optionRole;
