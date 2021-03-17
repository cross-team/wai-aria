"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const meterRole = new documentRole_1.default({
    name: 'meter',
    description: 'An element that represents a scalar measurement within a known range, or a fractional value.',
    superclassRoles: ['range'],
    relatedConcepts: [
        {
            subject: '<meter>',
            specification: 'HTML',
        },
    ],
    requiredAttributes: ['aria-valuenow'],
    accessibleName: ['author'],
    presentationalChildren: true,
    nameRequired: true,
    implicitValues: [
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
exports.default = meterRole;
