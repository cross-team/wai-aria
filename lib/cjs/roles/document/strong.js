"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const strongRole = new documentRole_1.default({
    name: 'strong',
    description: 'Content that is important, serious, or urgent. See related emphasis.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<strong>',
            specification: 'HTML',
        },
    ],
    prohibitedAttributes: ['aria-label', 'aria-labelledby'],
    accessibleName: 'prohibited',
});
exports.default = strongRole;
