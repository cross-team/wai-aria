"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractRole_1 = __importDefault(require("../abstractRole"));
const sectionheadRole = new abstractRole_1.default({
    name: 'sectionhead',
    description: 'A structure that labels or summarizes the topic of its related section.',
    superclassRoles: ['structure'],
    subclassRoles: ['columnheader', 'heading', 'rowheader', 'tab'],
    accessibleName: ['contents', 'author'],
});
exports.default = sectionheadRole;
