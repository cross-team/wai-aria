"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const widgetRole_1 = __importDefault(require("../widgetRole"));
const searchboxRole = new widgetRole_1.default({
    name: 'searchbox',
    description: 'A type of textbox intended for specifying search criteria.',
    superclassRoles: ['textbox'],
    baseConcepts: [
        {
            subject: '<input[type="search"]>',
            specification: 'HTML',
        },
    ],
    accessibleName: ['author'],
    nameRequired: true,
});
exports.default = searchboxRole;
