"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const landmarkRole_1 = __importDefault(require("../landmarkRole"));
const complementaryRole = new landmarkRole_1.default({
    name: 'complementary',
    description: 'A landmark that is designed to be complementary to the main content at a similar level in the DOM hierarchy, but remaining meaningful when separated from the main content.',
    superclassRoles: ['landmark'],
    accessibleName: ['author'],
});
exports.default = complementaryRole;
