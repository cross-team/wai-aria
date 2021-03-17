"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractRole_1 = __importDefault(require("../abstractRole"));
const compositeRole = new abstractRole_1.default({
    name: 'composite',
    description: 'A widget that may contain navigable descendants or owned children.',
    superclassRoles: ['widget'],
    subclassRoles: ['grid', 'select', 'spinbutton', 'tablist'],
    accessibleName: ['author'],
    supportedAttributes: ['aria-activedescendant', 'aria-disabled'],
});
exports.default = compositeRole;
