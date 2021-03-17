"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractRole_1 = __importDefault(require("../abstractRole"));
const windowRole = new abstractRole_1.default({
    name: 'window',
    description: 'A browser or application window.',
    superclassRoles: ['roletype'],
    subclassRoles: ['dialog'],
    supportedAttributes: ['aria-modal'],
    accessibleName: ['author'],
});
exports.default = windowRole;
