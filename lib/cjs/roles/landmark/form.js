"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const landmarkRole_1 = __importDefault(require("../landmarkRole"));
const formRole = new landmarkRole_1.default({
    name: 'form',
    description: 'A landmark region that contains a collection of items and objects that, as a whole, combine to create a form.',
    superclassRoles: ['landmark'],
    baseConcepts: [
        {
            subject: '<form>',
            specification: 'HTML',
        },
    ],
    accessibleName: ['author'],
    nameRequired: true,
});
exports.default = formRole;
