"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const scrollbarRole = new widgetRole_1.default({
    name: 'scrollbar',
    description: 'A graphical object that controls the scrolling of content within a viewing area, regardless of whether the content is fully displayed within the viewing area.',
    superclassRoles: ['range', 'widget'],
    requiredAttributes: ['aria-controls', 'aria-valuenow'],
    supportedAttributes: [
        'aria-disabled',
        'aria-orientation',
        'aria-valuemax',
        'aria-valuemin',
    ],
    accessibleName: ['author'],
    nameRequired: false,
    presentationalChildren: true,
    implicitValues: [
        {
            attribute: 'aria-orientation',
            value: 'vertical',
        },
        {
            attribute: 'aria-valuemin',
            value: '0',
        },
        {
            attribute: 'aria-valuemax',
            value: '100',
        },
    ],
});
exports.default = scrollbarRole;
