"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const landmarkRole_1 = __importDefault(require("../landmarkRole"));
const navigationRole = new landmarkRole_1.default({
    name: 'navigation',
    description: 'A landmark containing a collection of navigational elements (usually links) for navigating the document or related documents.',
    superclassRoles: ['landmark'],
    relatedConcepts: [
        {
            subject: '<nav>',
            specification: 'HTML',
        },
    ],
    accessibleName: ['author'],
});
exports.default = navigationRole;
