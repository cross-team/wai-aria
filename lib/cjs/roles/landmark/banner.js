"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const landmarkRole_1 = __importDefault(require("../landmarkRole"));
const bannerRole = new landmarkRole_1.default({
    name: 'banner',
    description: 'A landmark that contains mostly site-oriented content, rather than page-specific content.',
    superclassRoles: ['landmark'],
    accessibleName: ['author'],
});
exports.default = bannerRole;
