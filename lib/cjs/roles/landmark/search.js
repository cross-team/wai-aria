"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const landmarkRole_1 = __importDefault(require("../landmarkRole"));
const searchRole = new landmarkRole_1.default({
    name: 'search',
    description: 'A landmark region that contains a collection of items and objects that, as a whole, combine to create a search facility.',
    superclassRoles: ['landmark'],
    accessibleName: ['author'],
});
exports.default = searchRole;
