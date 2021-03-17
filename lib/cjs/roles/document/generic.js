"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const genericRole = new documentRole_1.default({
    name: 'generic',
    description: 'A nameless container element that has no semantic meaning on its own.',
    superclassRoles: ['structure'],
    relatedConcepts: [
        {
            subject: 'div',
            specification: 'HTML',
        },
        {
            subject: 'span',
            specification: 'HTML',
        },
    ],
    prohibitedAttributes: [
        'aria-label',
        'aria-labelledby',
        'aria-roledescription',
    ],
    accessibleName: 'prohibited',
});
exports.default = genericRole;
