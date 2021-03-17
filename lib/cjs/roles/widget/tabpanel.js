"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const tabpanelRole = new widgetRole_1.default({
    name: 'tabpanel',
    description: 'A container for the resources associated with a tab, where each tab is contained in a tablist.',
    superclassRoles: ['section'],
    accessibleName: ['author'],
    nameRequired: true,
});
exports.default = tabpanelRole;
