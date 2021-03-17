"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const menuitemcheckboxRole = new widgetRole_1.default({
    name: 'menuitemcheckbox',
    description: 'A menuitem with a checkable state whose possible values are true, false, or mixed.',
    superclassRoles: ['menuitem'],
    subclassRoles: ['menuitemradio'],
    relatedConcepts: ['menuitem'],
    requiredContextRoles: ['group', 'menu', 'menubar'],
    requiredAttributes: ['aria-checked'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
    presentationalChildren: true,
});
exports.default = menuitemcheckboxRole;
