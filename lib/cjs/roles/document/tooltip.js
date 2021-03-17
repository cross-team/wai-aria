"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const tooltipRole = new documentRole_1.default({
    name: 'tooltip',
    description: 'A contextual popup that displays a description for an element.',
    superclassRoles: ['section'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
});
exports.default = tooltipRole;
