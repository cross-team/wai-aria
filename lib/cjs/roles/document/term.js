"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const termRole = new documentRole_1.default({
    name: 'term',
    description: 'A word or phrase with a corresponding definition.',
    superclassRoles: ['section'],
    relatedConcepts: [{ subject: '<dfn>', specification: 'HTML' }],
    accessibleName: ['author'],
});
exports.default = termRole;
