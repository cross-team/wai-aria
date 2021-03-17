"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractRole_1 = __importDefault(require("../abstractRole"));
const landmarkRole = new abstractRole_1.default({
    name: 'landmark',
    description: 'A perceivable section containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page.',
    superclassRoles: ['section'],
    subclassRoles: [
        'banner',
        'complementary',
        'contentinfo',
        'form',
        'main',
        'navigation',
        'region',
        'search',
    ],
    accessibleName: ['author'],
    nameRequired: false,
});
exports.default = landmarkRole;
