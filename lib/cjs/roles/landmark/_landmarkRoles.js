"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const banner_1 = __importDefault(require("./banner"));
const complementary_1 = __importDefault(require("./complementary"));
const contentinfo_1 = __importDefault(require("./contentinfo"));
const form_1 = __importDefault(require("./form"));
const main_1 = __importDefault(require("./main"));
const navigation_1 = __importDefault(require("./navigation"));
const region_1 = __importDefault(require("./region"));
const search_1 = __importDefault(require("./search"));
const LandmarkRoles = [
    banner_1.default,
    complementary_1.default,
    contentinfo_1.default,
    form_1.default,
    main_1.default,
    navigation_1.default,
    region_1.default,
    search_1.default,
];
exports.default = LandmarkRoles;
