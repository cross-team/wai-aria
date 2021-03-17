"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const menuitemradioRole = new widgetRole_1.default({
    name: 'menuitemradio',
    description: 'A checkable menuitem in a set of elements with the same role, only one of which can be checked at a time.',
    superclassRoles: ['menuitemcheckbox'],
    relatedConcepts: ['menuitem'],
    requiredContextRoles: ['group', 'menu', 'menubar'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
    presentationalChildren: true,
});
exports.default = menuitemradioRole;
