"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const timeRole = new documentRole_1.default({
    name: 'time',
    description: 'An element that represents a specific point in time.',
    superclassRoles: ['section'],
    relatedConcepts: [{ subject: '<time>', specification: 'HTML' }],
    accessibleName: ['author'],
});
exports.default = timeRole;
