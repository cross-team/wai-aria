"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = __importDefault(require("./application"));
const article_1 = __importDefault(require("./article"));
const blockquote_1 = __importDefault(require("./blockquote"));
const caption_1 = __importDefault(require("./caption"));
const cell_1 = __importDefault(require("./cell"));
const columnheader_1 = __importDefault(require("./columnheader"));
const definition_1 = __importDefault(require("./definition"));
const deletion_1 = __importDefault(require("./deletion"));
const directory_1 = __importDefault(require("./directory"));
const document_1 = __importDefault(require("./document"));
const emphasis_1 = __importDefault(require("./emphasis"));
const feed_1 = __importDefault(require("./feed"));
const figure_1 = __importDefault(require("./figure"));
const generic_1 = __importDefault(require("./generic"));
const group_1 = __importDefault(require("./group"));
const heading_1 = __importDefault(require("./heading"));
const img_1 = __importDefault(require("./img"));
const insertion_1 = __importDefault(require("./insertion"));
const list_1 = __importDefault(require("./list"));
const listitem_1 = __importDefault(require("./listitem"));
const math_1 = __importDefault(require("./math"));
const meter_1 = __importDefault(require("./meter"));
const none_1 = __importDefault(require("./none"));
const note_1 = __importDefault(require("./note"));
const paragraph_1 = __importDefault(require("./paragraph"));
const presentation_1 = __importDefault(require("./presentation"));
const row_1 = __importDefault(require("./row"));
const rowgroup_1 = __importDefault(require("./rowgroup"));
const rowheader_1 = __importDefault(require("./rowheader"));
const separatorNoFocus_1 = __importDefault(require("./separatorNoFocus"));
const strong_1 = __importDefault(require("./strong"));
const subscript_1 = __importDefault(require("./subscript"));
const superscript_1 = __importDefault(require("./superscript"));
const table_1 = __importDefault(require("./table"));
const term_1 = __importDefault(require("./term"));
const time_1 = __importDefault(require("./time"));
const toolbar_1 = __importDefault(require("./toolbar"));
const tooltip_1 = __importDefault(require("./tooltip"));
const DocumentStructureRoles = [
    application_1.default,
    article_1.default,
    blockquote_1.default,
    caption_1.default,
    cell_1.default,
    columnheader_1.default,
    definition_1.default,
    deletion_1.default,
    directory_1.default,
    document_1.default,
    emphasis_1.default,
    feed_1.default,
    figure_1.default,
    generic_1.default,
    group_1.default,
    heading_1.default,
    img_1.default,
    insertion_1.default,
    list_1.default,
    listitem_1.default,
    math_1.default,
    meter_1.default,
    none_1.default,
    note_1.default,
    paragraph_1.default,
    presentation_1.default,
    row_1.default,
    rowgroup_1.default,
    rowheader_1.default,
    separatorNoFocus_1.default,
    strong_1.default,
    subscript_1.default,
    superscript_1.default,
    table_1.default,
    term_1.default,
    time_1.default,
    toolbar_1.default,
    tooltip_1.default,
];
exports.default = DocumentStructureRoles;
