"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const buttonRole = new widgetRole_1.default({
    name: 'button',
    description: 'An input that allows for user-triggered actions when clicked or pressed.',
    superclassRoles: ['command'],
    baseConcepts: [
        {
            subject: '<button>',
            specification: 'HTML',
        },
    ],
    relatedConcepts: ['link'],
    supportedAttributes: [
        'aria-disabled',
        'aria-haspopup',
        'aria-expanded',
        'aria-pressed',
    ],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
    presentationalChildren: true,
});
exports.default = buttonRole;
