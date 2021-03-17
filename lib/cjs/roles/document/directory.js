"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const directoryRole = new documentRole_1.default({
    name: 'directory',
    description: 'A list of references to members of a group, such as a static table of contents.',
    superclassRoles: [],
    accessibleName: ['author'],
    deprecated: true,
});
exports.default = directoryRole;
