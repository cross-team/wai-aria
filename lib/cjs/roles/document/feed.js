"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const documentRole_1 = __importDefault(require("../documentRole"));
const feedRole = new documentRole_1.default({
    name: 'feed',
    description: 'A scrollable list of articles where scrolling may cause articles to be added to or removed from either end of the list.',
    superclassRoles: ['list'],
    requiredOwnedElements: ['article'],
    accessibleName: ['author'],
    nameRequired: false,
});
exports.default = feedRole;
