"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRole = void 0;
const _roles_1 = __importDefault(require("../roles/_roles"));
const getRole = (name) => {
    let roles = _roles_1.default.filter((role) => role.name === name);
    if (roles.length === 1) {
        return roles[0];
    }
    return roles;
};
exports.getRole = getRole;
