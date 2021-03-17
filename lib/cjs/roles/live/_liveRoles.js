"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alert_1 = __importDefault(require("./alert"));
const log_1 = __importDefault(require("./log"));
const marquee_1 = __importDefault(require("./marquee"));
const status_1 = __importDefault(require("./status"));
const timer_1 = __importDefault(require("./timer"));
const LiveRegionRoles = [alert_1.default, log_1.default, marquee_1.default, status_1.default, timer_1.default];
exports.default = LiveRegionRoles;
