"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const captionRole = new documentRole_1.default({
    name: 'caption',
    description: 'Visible content that names, and may also describe, a figure, table, grid, or treegrid.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<caption>',
            specification: 'HTML',
        },
        {
            subject: '<figcaption>',
            specification: 'HTML',
        },
    ],
    requiredContextRoles: ['figure', 'grid', 'table', 'treegrid'],
    prohibitedAttributes: ['aria-label', 'aria-labelledby'],
    accessibleName: 'prohibited',
});
exports.default = captionRole;
