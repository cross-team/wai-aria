"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const switchRole = new widgetRole_1.default({
    name: 'switch',
    description: 'A type of checkbox that represents on/off values, as opposed to checked/unchecked values.',
    superclassRoles: ['checkbox'],
    relatedConcepts: ['button'],
    requiredAttributes: ['aria-checked'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
    presentationalChildren: true,
});
exports.default = switchRole;
