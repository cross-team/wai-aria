"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const liveRole_1 = __importDefault(require("../liveRole"));
const timerRole = new liveRole_1.default({
    name: 'timer',
    description: 'A type of live region containing a numerical counter which indicates an amount of elapsed time from a start point, or the time remaining until an end point.',
    superclassRoles: ['status'],
    accessibleName: ['author'],
});
exports.default = timerRole;
