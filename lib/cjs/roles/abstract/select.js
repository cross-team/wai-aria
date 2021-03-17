"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractRole_1 = __importDefault(require("../abstractRole"));
const selectRole = new abstractRole_1.default({
    name: 'select',
    description: 'A form widget that allows the user to make selections from a set of choices.',
    superclassRoles: ['composite', 'group'],
    subclassRoles: ['listbox', 'menu', 'radiogroup', 'tree'],
    supportedAttributes: ['aria-orientation'],
    accessibleName: ['author'],
});
exports.default = selectRole;
