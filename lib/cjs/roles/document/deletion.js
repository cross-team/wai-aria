"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const deletionRole = new documentRole_1.default({
    name: 'deletion',
    description: 'A deletion contains content that is marked as removed or content that is being suggested for removal.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<del>',
            specification: 'HTML',
        },
    ],
    prohibitedAttributes: ['aria-label', 'aria-labelledby'],
    accessibleName: 'prohibited',
});
exports.default = deletionRole;
