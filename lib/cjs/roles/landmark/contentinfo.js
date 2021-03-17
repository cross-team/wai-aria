"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const landmarkRole_1 = __importDefault(require("../landmarkRole"));
const contentinfoRole = new landmarkRole_1.default({
    name: 'contentinfo',
    description: 'A landmark that contains information about the parent document.',
    superclassRoles: ['landmark'],
    accessibleName: ['author'],
});
exports.default = contentinfoRole;
