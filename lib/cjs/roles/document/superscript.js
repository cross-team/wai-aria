"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const superscriptRole = new documentRole_1.default({
    name: 'superscript',
    description: 'One or more superscripted characters.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<sub>',
            specification: 'HTML',
        },
        {
            subject: '<sup>',
            specification: 'HTML',
        },
    ],
    prohibitedAttributes: ['aria-label', 'aria-labelledby'],
    accessibleName: 'prohibited',
});
exports.default = superscriptRole;
