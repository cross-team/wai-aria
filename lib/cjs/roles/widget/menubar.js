"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const menubarRole = new widgetRole_1.default({
    name: 'menubar',
    description: 'A presentation of menu that usually remains visible and is usually presented horizontally.',
    superclassRoles: ['menu'],
    relatedConcepts: ['toolbar'],
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
            value: 'horizontal',
        },
    ],
});
exports.default = menubarRole;
