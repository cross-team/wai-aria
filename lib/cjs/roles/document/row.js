"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const rowRole = new documentRole_1.default({
    name: 'row',
    description: 'A row of cells in a tabular container.',
    superclassRoles: ['group', 'widget'],
    baseConcepts: [
        {
            subject: '<tr>',
            specification: 'HTML',
        },
    ],
    requiredContextRoles: ['grid', 'rowgroup', 'table', 'treegrid'],
    requiredOwnedElements: ['cell', 'columnheader', 'gridcell', 'rowheader'],
    supportedAttributes: [
        'aria-colindex',
        'aria-expanded',
        'aria-level',
        'aria-posinset',
        'aria-rowindex',
        'aria-setsize',
        'aria-selected',
    ],
    accessibleName: ['contents', 'author'],
});
exports.default = rowRole;
