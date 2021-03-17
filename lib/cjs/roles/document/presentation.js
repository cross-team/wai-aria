"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const presentationRole = new documentRole_1.default({
    name: 'presentation',
    description: 'An element whose implicit native role semantics will not be mapped to the accessibility API.',
    superclassRoles: ['structure'],
    prohibitedAttributes: ['aria-label', 'aria-labelledby'],
    accessibleName: 'prohibited',
});
exports.default = presentationRole;
