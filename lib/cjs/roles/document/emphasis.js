"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const emphasisRole = new documentRole_1.default({
    name: 'emphasis',
    description: 'One or more emphasized characters.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<em>',
            specification: 'HTML',
        },
    ],
    prohibitedAttributes: ['aria-label', 'aria-labelledby'],
    accessibleName: 'prohibited',
});
exports.default = emphasisRole;
