"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const windowRole_1 = __importDefault(require("../windowRole"));
const dialogRole = new windowRole_1.default({
    name: 'dialog',
    description: 'A dialog is a descendant window of the primary window of a web application.',
    superclassRoles: ['window'],
    subclassRoles: ['alertdialog'],
    accessibleName: ['author'],
    nameRequired: true,
});
exports.default = dialogRole;
