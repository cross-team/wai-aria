"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const documentRole = new documentRole_1.default({
    name: 'document',
    description: 'An element containing content that assistive technology users may want to browse in a reading mode.',
    superclassRoles: ['structure'],
    subclassRoles: ['article'],
    accessibleName: ['author'],
    nameRequired: false,
});
exports.default = documentRole;
