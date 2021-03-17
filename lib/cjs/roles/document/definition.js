"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const definitionRole = new documentRole_1.default({
    name: 'definition',
    description: 'A definition of a term or concept.',
    superclassRoles: ['section'],
    accessibleName: ['author'],
});
exports.default = definitionRole;
