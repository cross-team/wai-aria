"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const toolbarRole = new documentRole_1.default({
    name: 'toolbar',
    description: 'A collection of commonly used function buttons or controls represented in compact visual form.',
    superclassRoles: ['group'],
    relatedConcepts: ['menubar'],
    supportedAttributes: ['aria-orientation'],
    accessibleName: ['author'],
    implicitValues: [
        {
            attribute: 'aria-orientation',
            value: 'horizontal',
        },
    ],
});
exports.default = toolbarRole;
