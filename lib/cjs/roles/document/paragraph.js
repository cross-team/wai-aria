"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const paragraphRole = new documentRole_1.default({
    name: 'paragraph',
    description: 'A paragraph of content.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<p>',
            specification: 'HTML',
        },
    ],
    prohibitedAttributes: ['aria-label', 'aria-labelledby'],
    accessibleName: 'prohibited',
});
exports.default = paragraphRole;
