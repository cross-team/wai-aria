"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const rowgroupRole = new documentRole_1.default({
    name: 'rowgroup',
    description: 'A structure containing one or more row elements in a tabular container.',
    superclassRoles: ['structure'],
    baseConcepts: [
        {
            subject: '<tbody>',
            specification: 'HTML',
        },
        {
            subject: '<tfoot>',
            specification: 'HTML',
        },
        {
            subject: '<thead>',
            specification: 'HTML',
        },
    ],
    requiredContextRoles: ['grid', 'table', 'tree'],
    requiredOwnedElements: ['row'],
    accessibleName: ['author'],
});
exports.default = rowgroupRole;
