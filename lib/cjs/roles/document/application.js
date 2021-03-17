"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const applicationRole = new documentRole_1.default({
    name: 'application',
    description: 'A structure containing one or more focusable elements requiring user input, such as keyboard or gesture events, that do not follow a standard interaction pattern supported by a widget role.',
    superclassRoles: ['structure'],
    supportedAttributes: [
        'aria-activedescendant',
        'aria-disabled',
        'aria-errormessage',
        'aria-expanded',
        'aria-haspopup',
        'aria-invalid',
    ],
    accessibleName: ['author'],
    nameRequired: true,
});
exports.default = applicationRole;
