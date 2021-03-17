"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const radiogroupRole = new widgetRole_1.default({
    name: 'radiogroup',
    description: 'A group of radio buttons.',
    superclassRoles: ['select'],
    relatedConcepts: ['list'],
    requiredOwnedElements: ['radio'],
    supportedAttributes: [
        'aria-errormessage',
        'aria-invalid',
        'aria-readonly',
        'aria-required',
    ],
    accessibleName: ['author'],
    nameRequired: true,
});
exports.default = radiogroupRole;
