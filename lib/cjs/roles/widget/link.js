"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const linkRole = new widgetRole_1.default({
    name: 'link',
    description: 'An interactive reference to an internal or external resource that, when activated, causes the user agent to navigate to that resource.',
    superclassRoles: ['command'],
    relatedConcepts: [
        {
            subject: '<a>',
            specification: 'HTML',
        },
        {
            subject: '<link>',
            specification: 'HTML',
        },
    ],
    supportedAttributes: ['aria-disabled', 'aria-expanded', 'aria-haspopup'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
});
exports.default = linkRole;
