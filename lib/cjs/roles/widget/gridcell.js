"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const gridcellRole = new widgetRole_1.default({
    name: 'gridcell',
    description: 'A cell in a grid or treegrid.',
    superclassRoles: ['cell', 'widget'],
    subclassRoles: ['columnheader', 'rowheader'],
    baseConcepts: [
        {
            subject: '<td>',
            specification: 'HTML',
        },
    ],
    requiredContextRoles: ['row'],
    supportedAttributes: [
        'aria-disabled',
        'aria-errormessage',
        'aria-expanded',
        'aria-haspopup',
        'aria-invalid',
        'aria-readonly',
        'aria-required',
        'aria-selected',
    ],
    accessibleName: ['contents', 'author'],
});
exports.default = gridcellRole;
