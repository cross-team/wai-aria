"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const headingRole = new documentRole_1.default({
    name: 'heading',
    description: 'A heading for a section of the page.',
    superclassRoles: ['sectionhead'],
    relatedConcepts: [
        {
            subject: '<h1>',
            specification: 'HTML',
        },
        {
            subject: '<h2>',
            specification: 'HTML',
        },
        {
            subject: '<h3>',
            specification: 'HTML',
        },
        {
            subject: '<h4>',
            specification: 'HTML',
        },
        {
            subject: '<h5>',
            specification: 'HTML',
        },
        {
            subject: '<h6>',
            specification: 'HTML',
        },
    ],
    requiredAttributes: ['aria-level'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
});
exports.default = headingRole;
