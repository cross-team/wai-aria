"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const abstractRole_1 = __importDefault(require("../abstractRole"));
const sectionRole = new abstractRole_1.default({
    name: 'section',
    description: 'A renderable structural containment unit in a document or application.',
    superclassRoles: ['structure'],
    subclassRoles: [
        'alert',
        'blockquote',
        'caption',
        'cell',
        'code',
        'definition',
        'deletion',
        'emphasis',
        'figure',
        'group',
        'img',
        'insertion',
        'landmark',
        'list',
        'listitem',
        'log',
        'marquee',
        'math',
        'note',
        'paragraph',
        'status',
        'strong',
        'subscript',
        'superscript',
        'table',
        'tabpanel',
        'term',
        'time',
        'tooltip',
    ],
    accessibleName: [],
});
exports.default = sectionRole;
