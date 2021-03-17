"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const separatorFocusRole = new documentRole_1.default({
    name: 'separator',
    description: 'A divider that separates and distinguishes sections of content or groups of menuitems.',
    superclassRoles: ['widget'],
    relatedConcepts: [
        {
            subject: '<hr>',
            specification: 'HTML',
        },
    ],
    requiredAttributes: ['aria-valuenow'],
    supportedAttributes: [
        'aria-orientation',
        'aria-disabled',
        'aria-valuemax',
        'aria-valuemin',
        'aria-valuetext',
    ],
    accessibleName: ['author'],
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
exports.default = separatorFocusRole;
