"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const groupRole = new documentRole_1.default({
    name: 'group',
    description: 'A set of user interface objects that is not intended to be included in a page summary or table of contents by assistive technologies.',
    superclassRoles: ['section'],
    subclassRoles: ['row', 'select', 'toolbar'],
    relatedConcepts: [
        {
            subject: '<fieldset>',
            specification: 'HTML',
        },
    ],
    supportedAttributes: ['aria-activedescendant', 'aria-disabled'],
    accessibleName: ['author'],
});
exports.default = groupRole;
