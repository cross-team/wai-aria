"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const imgRole = new documentRole_1.default({
    name: 'img',
    description: 'A container for a collection of elements that form an image.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<img>',
            specification: 'HTML',
        },
    ],
    accessibleName: ['author'],
    nameRequired: true,
    presentationalChildren: true,
});
exports.default = imgRole;
