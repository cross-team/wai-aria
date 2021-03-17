"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractRole_1 = __importDefault(require("../abstractRole"));
const rangeRole = new abstractRole_1.default({
    name: 'range',
    description: 'An element representing a range of values.',
    superclassRoles: ['structure'],
    subclassRoles: ['meter', 'progressbar', 'scrollbar', 'slider', 'spinbutton'],
    supportedAttributes: [
        'aria-valuemax',
        'aria-valuemin',
        'aria-valuenow',
        'aria-valuetext',
    ],
    accessibleName: ['author'],
});
exports.default = rangeRole;
