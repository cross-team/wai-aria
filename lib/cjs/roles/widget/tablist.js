"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const tablistRole = new widgetRole_1.default({
    name: 'tablist',
    description: 'A list of tab elements, which are references to tabpanel elements.',
    superclassRoles: ['composite'],
    requiredOwnedElements: ['tab'],
    supportedAttributes: ['aria-multiselectable', 'aria-orientation'],
    accessibleName: ['author'],
    implicitValues: [
        {
            attribute: 'aria-orientation',
            value: 'horizontal',
        },
    ],
});
exports.default = tablistRole;
