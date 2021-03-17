"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __importDefault(require("./command"));
const composite_1 = __importDefault(require("./composite"));
const input_1 = __importDefault(require("./input"));
const landmark_1 = __importDefault(require("./landmark"));
const range_1 = __importDefault(require("./range"));
const roletype_1 = __importDefault(require("./roletype"));
const section_1 = __importDefault(require("./section"));
const sectionhead_1 = __importDefault(require("./sectionhead"));
const select_1 = __importDefault(require("./select"));
const structure_1 = __importDefault(require("./structure"));
const widget_1 = __importDefault(require("./widget"));
const window_1 = __importDefault(require("./window"));
const AbstractRoles = [
    command_1.default,
    composite_1.default,
    input_1.default,
    landmark_1.default,
    range_1.default,
    roletype_1.default,
    section_1.default,
    sectionhead_1.default,
    select_1.default,
    structure_1.default,
    widget_1.default,
    window_1.default,
];
exports.default = AbstractRoles;
