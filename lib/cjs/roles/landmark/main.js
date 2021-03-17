"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const landmarkRole_1 = __importDefault(require("../landmarkRole"));
const mainRole = new landmarkRole_1.default({
    name: 'main',
    description: 'A landmark containing the main content of a document.',
    superclassRoles: ['landmark'],
    accessibleName: ['author'],
});
exports.default = mainRole;
