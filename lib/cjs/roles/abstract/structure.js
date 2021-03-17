"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractRole_1 = __importDefault(require("../abstractRole"));
const structureRole = new abstractRole_1.default({
    name: 'structure',
    description: 'A document structural element.',
    superclassRoles: ['roletype'],
    subclassRoles: [
        'application',
        'document',
        'generic',
        'presentation',
        'range',
        'rowgroup',
        'section',
        'sectionhead',
        'separator',
    ],
    accessibleName: [],
});
exports.default = structureRole;
