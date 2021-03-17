"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const liveRole_1 = __importDefault(require("../liveRole"));
const alertRole = new liveRole_1.default({
    name: 'alert',
    description: 'A type of live region with important, and usually time-sensitive, information.',
    superclassRoles: ['section'],
    subclassRoles: ['alertdialog'],
    accessibleName: ['author'],
    implicitValues: [
        {
            attribute: 'aria-live',
            value: 'assertive',
        },
        {
            attribute: 'aria-atomic',
            value: 'true',
        },
    ],
});
exports.default = alertRole;
