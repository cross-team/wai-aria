"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alertdialog_1 = __importDefault(require("./alertdialog"));
const dialog_1 = __importDefault(require("./dialog"));
const WindowRoles = [alertdialog_1.default, dialog_1.default];
exports.default = WindowRoles;
