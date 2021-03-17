"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const liveRole_1 = __importDefault(require("../liveRole"));
const logRole = new liveRole_1.default({
    name: 'log',
    description: 'A type of live region where new information is added in meaningful order and old information may disappear.',
    superclassRoles: ['section'],
    accessibleName: ['author'],
    implicitValues: [
        {
            attribute: 'aria-live',
            value: 'polite',
        },
    ],
});
exports.default = logRole;
