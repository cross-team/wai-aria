"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const tabRole = new widgetRole_1.default({
    name: 'tab',
    description: 'A grouping label providing a mechanism for selecting the tab content that is to be rendered to the user.',
    superclassRoles: ['sectionhead', 'widget'],
    requiredContextRoles: ['tablist'],
    supportedAttributes: [
        'aria-disabled',
        'aria-expanded',
        'aria-haspopup',
        'aria-posinset',
        'aria-selected',
        'aria-setsize',
    ],
    accessibleName: ['contents', 'author'],
    presentationalChildren: true,
    implicitValues: [
        {
            attribute: 'aria-selected',
            value: 'false',
        },
    ],
});
exports.default = tabRole;
