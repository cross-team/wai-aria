"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const columnheaderRole = new documentRole_1.default({
    name: 'columnheader',
    description: 'A cell containing header information for a column.',
    superclassRoles: ['cell', 'gridcell', 'sectionhead'],
    baseConcepts: [{ subject: '<th[scope="col"]>', specification: 'HTML' }],
    requiredContextRoles: ['row'],
    supportedAttributes: ['aria-sort'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
});
exports.default = columnheaderRole;
