"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const figureRole = new documentRole_1.default({
    name: 'figure',
    description: 'A perceivable section of content that typically contains a graphical document, images, code snippets, or example text.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<figure>',
            specification: 'HTML',
        },
    ],
    accessibleName: ['author'],
    nameRequired: false,
});
exports.default = figureRole;
