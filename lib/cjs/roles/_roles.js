"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _abstractRoles_1 = __importDefault(require("./abstract/_abstractRoles"));
const _documentRoles_1 = __importDefault(require("./document/_documentRoles"));
const _landmarkRoles_1 = __importDefault(require("./landmark/_landmarkRoles"));
const _liveRoles_1 = __importDefault(require("./live/_liveRoles"));
const _widgetRoles_1 = __importDefault(require("./widget/_widgetRoles"));
const _windowRoles_1 = __importDefault(require("./window/_windowRoles"));
const AllRoles = [
    ..._abstractRoles_1.default,
    ..._documentRoles_1.default,
    ..._landmarkRoles_1.default,
    ..._liveRoles_1.default,
    ..._widgetRoles_1.default,
    ..._windowRoles_1.default,
];
exports.default = AllRoles;
