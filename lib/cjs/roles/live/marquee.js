"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const liveRole_1 = __importDefault(require("../liveRole"));
const marqueeRole = new liveRole_1.default({
    name: 'marquee',
    description: 'A type of live region where non-essential information changes frequently.',
    superclassRoles: ['section'],
    accessibleName: ['author'],
    nameRequired: true,
});
exports.default = marqueeRole;
