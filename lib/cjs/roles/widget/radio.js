"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const radioRole = new widgetRole_1.default({
    name: 'radio',
    description: 'A checkable input in a group of elements with the same role, only one of which can be checked at a time.',
    superclassRoles: ['input'],
    relatedConcepts: [
        {
            subject: '<input[type="radio"]>',
            specification: 'HTML',
        },
    ],
    requiredAttributes: ['aria-checked'],
    supportedAttributes: ['aria-posinset', 'aria-setsize'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
    presentationalChildren: true,
});
exports.default = radioRole;
