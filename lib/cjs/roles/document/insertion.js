"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const insertionRole = new documentRole_1.default({
    name: 'insertion',
    description: 'An insertion contains content that is marked as added or content that is being suggested for addition.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<ins>',
            specification: 'HTML',
        },
    ],
    prohibitedAttributes: ['aria-label', 'aria-labelledby'],
    accessibleName: 'prohibited',
});
exports.default = insertionRole;
