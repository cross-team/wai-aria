"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const menuRole = new widgetRole_1.default({
    name: 'menu',
    description: 'A type of widget that offers a list of choices to the user.',
    superclassRoles: ['select'],
    subclassRoles: ['menubar'],
    relatedConcepts: ['list'],
    requiredOwnedElements: [
        ['group', 'menuitem'],
        ['group', 'menuitemradio'],
        ['group', 'menuitemcheckbox'],
        'menuitem',
        'menuitemcheckbox',
        'menuitemradio',
    ],
    accessibleName: ['author'],
    implicitValues: [
        {
            attribute: 'aria-orientation',
            value: 'vertical',
        },
    ],
});
exports.default = menuRole;
