"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const listRole = new documentRole_1.default({
    name: 'list',
    description: 'A section containing listitem elements.',
    superclassRoles: ['section'],
    subclassRoles: ['directory', 'feed'],
    baseConcepts: [
        {
            subject: '<ol>',
            specification: 'HTML',
        },
        {
            subject: '<ul>',
            specification: 'HTML',
        },
    ],
    requiredOwnedElements: ['listitem'],
    accessibleName: ['author'],
});
exports.default = listRole;
