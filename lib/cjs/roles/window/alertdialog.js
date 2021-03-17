"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const windowRole_1 = __importDefault(require("../windowRole"));
const alertdialogRole = new windowRole_1.default({
    name: 'alertdialog',
    description: 'A type of dialog that contains an alert message, where initial focus goes to an element within the dialog.',
    superclassRoles: ['alert', 'dialog'],
    accessibleName: ['author'],
    nameRequired: true,
});
exports.default = alertdialogRole;
