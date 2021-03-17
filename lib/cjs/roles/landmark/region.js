"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const landmarkRole_1 = __importDefault(require("../landmarkRole"));
const regionRole = new landmarkRole_1.default({
    name: 'region',
    description: 'A landmark containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page.',
    superclassRoles: ['landmark'],
    relatedConcepts: [
        {
            subject: '<section>',
            specification: 'HTML',
        },
    ],
    accessibleName: ['author'],
    nameRequired: true,
});
exports.default = regionRole;
