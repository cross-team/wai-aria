"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const liveRole_1 = __importDefault(require("../liveRole"));
const statusRole = new liveRole_1.default({
    name: 'status',
    description: 'A type of live region whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar.',
    superclassRoles: ['section'],
    subclassRoles: ['timer'],
    accessibleName: ['author'],
    implicitValues: [
        {
            attribute: 'aria-live',
            value: 'polite',
        },
        {
            attribute: 'aria-atomic',
            value: 'true',
        },
    ],
});
exports.default = statusRole;
