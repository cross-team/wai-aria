"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractRole_1 = __importDefault(require("../abstractRole"));
const widgetRole = new abstractRole_1.default({
    name: 'widget',
    description: 'An interactive component of a graphical user interface (GUI).',
    superclassRoles: ['roletype'],
    subclassRoles: [
        'command',
        'composite',
        'gridcell',
        'input',
        'progressbar',
        'row',
        'scrollbar',
        'separator',
        'tab',
    ],
    accessibleName: [],
});
exports.default = widgetRole;
