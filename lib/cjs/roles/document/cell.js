"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const cellRole = new documentRole_1.default({
    name: 'cell',
    description: 'A cell in a tabular container. See related gridcell.',
    superclassRoles: ['section'],
    subclassRoles: ['columnheader', 'gridcell', 'rowheader'],
    baseConcepts: [
        {
            subject: '<td>',
            specification: 'HTML',
        },
    ],
    requiredContextRoles: ['row'],
    supportedAttributes: [
        'aria-colindex',
        'aria-colspan',
        'aria-rowindex',
        'aria-rowspan',
    ],
    accessibleName: ['contents', 'author'],
});
exports.default = cellRole;
