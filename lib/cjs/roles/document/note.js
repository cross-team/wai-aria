"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const noteRole = new documentRole_1.default({
    name: 'note',
    description: 'A section whose content is parenthetic or ancillary to the main content of the resource.',
    superclassRoles: ['section'],
    accessibleName: ['author'],
});
exports.default = noteRole;
