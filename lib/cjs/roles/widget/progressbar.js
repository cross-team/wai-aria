"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const progressbarRole = new widgetRole_1.default({
    name: 'progressbar',
    description: 'An element that displays the progress status for tasks that take a long time.',
    superclassRoles: ['range', 'widget'],
    relatedConcepts: ['status'],
    accessibleName: ['author'],
    presentationalChildren: true,
    nameRequired: true,
    implicitValues: [
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
exports.default = progressbarRole;
