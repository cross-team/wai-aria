"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const listitemRole = new documentRole_1.default({
    name: 'listitem',
    description: 'A single item in a list or directory.',
    superclassRoles: ['section'],
    subclassRoles: ['treeitem'],
    baseConcepts: [
        {
            subject: '<li>',
            specification: 'HTML',
        },
    ],
    requiredContextRoles: ['directory', 'list'],
    supportedAttributes: ['aria-level', 'aria-posinset', 'aria-setsize'],
    accessibleName: ['author'],
});
exports.default = listitemRole;
