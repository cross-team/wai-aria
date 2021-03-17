"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const blockquoteRole = new documentRole_1.default({
    name: 'blockquote',
    description: 'A section of content that is quoted from another source.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<blockquote>',
            specification: 'HTML',
        },
    ],
    accessibleName: ['author'],
});
exports.default = blockquoteRole;
