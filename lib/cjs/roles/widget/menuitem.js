"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const menuitemRole = new widgetRole_1.default({
    name: 'menuitem',
    description: 'An option in a set of choices contained by a menu or menubar.',
    superclassRoles: ['command'],
    subclassRoles: ['menuitemcheckbox'],
    relatedConcepts: ['listitem', 'option'],
    requiredContextRoles: ['group', 'menu', 'menubar'],
    supportedAttributes: [
        'aria-disabled',
        'aria-expanded',
        'aria-haspopup',
        'aria-posinset',
        'aria-setsize',
    ],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
});
exports.default = menuitemRole;
