"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractRole_1 = __importDefault(require("../abstractRole"));
const commandRole = new abstractRole_1.default({
    name: 'command',
    description: 'A form of widget that performs an action but does not receive input data.',
    superclassRoles: ['widget'],
    subclassRoles: ['button', 'link', 'menuitem'],
    accessibleName: ['author'],
});
exports.default = commandRole;
