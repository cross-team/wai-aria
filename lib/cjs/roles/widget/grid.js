"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const gridRole = new widgetRole_1.default({
    name: 'grid',
    description: 'A composite widget containing a collection of one or more rows with one or more cells where some or all cells in the grid are focusable by using methods of two-dimensional navigation, such as directional arrow keys.',
    superclassRoles: ['composite', 'table'],
    subclassRoles: ['treegrid'],
    baseConcepts: [
        {
            subject: '<table>',
            specification: 'HTML',
        },
    ],
    requiredOwnedElements: ['row', ['rowgroup', 'row']],
    supportedAttributes: ['aria-multiselectable', 'aria-readonly'],
    accessibleName: ['author'],
    nameRequired: true,
});
exports.default = gridRole;
