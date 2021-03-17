"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractRole_1 = __importDefault(require("../abstractRole"));
const inputRole = new abstractRole_1.default({
    name: 'input',
    description: 'A generic type of widget that allows user input.',
    superclassRoles: ['widget'],
    subclassRoles: [
        'checkbox',
        'combobox',
        'option',
        'radio',
        'slider',
        'spinbutton',
        'textbox',
    ],
    supportedAttributes: ['aria-disabled'],
    accessibleName: ['author'],
});
exports.default = inputRole;
