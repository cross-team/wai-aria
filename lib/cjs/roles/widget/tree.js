"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const treeRole = new widgetRole_1.default({
    name: 'tree',
    description: 'A widget that allows the user to select one or more items from a hierarchically organized collection.',
    superclassRoles: ['select'],
    subclassRoles: ['treegrid'],
    requiredOwnedElements: [['group', 'treeitem'], 'treeitem'],
    supportedAttributes: [
        'aria-errormessage',
        'aria-invalid',
        'aria-multiselectable',
        'aria-required',
    ],
    accessibleName: ['author'],
    nameRequired: true,
    implicitValues: [
        {
            attribute: 'aria-orientation',
            value: 'vertical',
        },
    ],
});
exports.default = treeRole;
