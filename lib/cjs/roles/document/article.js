"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const articleRole = new documentRole_1.default({
    name: 'article',
    description: 'A section of a page that consists of a composition that forms an independent part of a document, page, or site.',
    superclassRoles: ['document'],
    relatedConcepts: [
        {
            subject: '<article>',
            specification: 'HTML',
        },
    ],
    supportedAttributes: ['aria-posinset', 'aria-setsize'],
    accessibleName: ['author'],
});
exports.default = articleRole;
