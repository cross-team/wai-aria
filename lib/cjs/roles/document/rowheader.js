"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const rowheaderRole = new documentRole_1.default({
    name: 'rowheader',
    description: 'A cell containing header information for a row.',
    superclassRoles: ['cell', 'gridcell', 'sectionhead'],
    baseConcepts: [
        {
            subject: '<th[scope="row"]>',
            specification: 'HTML',
        },
    ],
    requiredContextRoles: ['row'],
    supportedAttributes: ['aria-expanded', 'aria-sort'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
});
exports.default = rowheaderRole;
