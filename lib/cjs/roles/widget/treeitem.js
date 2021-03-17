"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const treeitemRole = new widgetRole_1.default({
    name: 'treeitem',
    description: 'An option item of a tree. This is an element within a tree that may be expanded or collapsed if it contains a sub-level group of tree item elements.',
    superclassRoles: ['listitem', 'option'],
    requiredContextRoles: ['group', 'tree'],
    supportedAttributes: ['aria-expanded', 'aria-haspopup'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
});
exports.default = treeitemRole;
