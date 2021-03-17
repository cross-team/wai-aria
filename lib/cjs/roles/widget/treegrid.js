"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const treegridRole = new widgetRole_1.default({
    name: 'treegrid',
    description: 'A grid whose rows can be expanded and collapsed in the same manner as for a tree.',
    superclassRoles: ['grid', 'tree'],
    requiredOwnedElements: ['row', ['rowgroup', 'row']],
    accessibleName: ['author'],
    nameRequired: true,
});
exports.default = treegridRole;
