"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const tableRole = new documentRole_1.default({
    name: 'table',
    description: 'A section containing data arranged in rows and columns.',
    superclassRoles: ['section'],
    subclassRoles: ['grid'],
    baseConcepts: [
        {
            subject: '<table>',
            specification: 'HTML',
        },
    ],
    requiredOwnedElements: ['row', ['rowgroup', 'row']],
    supportedAttributes: ['aria-colcount', 'aria-rowcount'],
    accessibleName: ['author'],
    nameRequired: true,
});
exports.default = tableRole;
