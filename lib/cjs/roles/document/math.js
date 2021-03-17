"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const mathRole = new documentRole_1.default({
    name: 'math',
    description: 'Content that represents a mathematical expression.',
    superclassRoles: ['section'],
    accessibleName: ['author'],
    presentationalChildren: false,
});
exports.default = mathRole;
