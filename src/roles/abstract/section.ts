import AbstractRole from '../abstractRole'
import blockquoteRole from '../document/blockquote'
import captionRole from '../document/caption'
import cellRole from '../document/cell'
import codeRole from '../document/code'
import definitionRole from '../document/definition'
import deletionRole from '../document/deletion'
import emphasisRole from '../document/emphasis'
import figureRole from '../document/figure'
import groupRole from '../document/group'
import imgRole from '../document/img'
import insertionRole from '../document/insertion'
import listRole from '../document/list'
import listitemRole from '../document/listitem'
import mathRole from '../document/math'
import noteRole from '../document/note'
import paragraphRole from '../document/paragraph'
import strongRole from '../document/strong'
import subscriptRole from '../document/subscript'
import superscriptRole from '../document/superscript'
import tableRole from '../document/table'
import termRole from '../document/term'
import timeRole from '../document/time'
import tooltipRole from '../document/tooltip'
import alertRole from '../live/alert'
import logRole from '../live/log'
import marqueeRole from '../live/marquee'
import statusRole from '../live/status'
import tabpanelRole from '../widget/tabpanel'
import landmarkRole from './landmark'
import structureRole from './structure'

const sectionRole: AbstractRole = new AbstractRole({
  name: 'section',
  description:
    'A renderable structural containment unit in a document or application.',
  superclassRoles: [structureRole],
  subclassRoles: [
    alertRole,
    blockquoteRole,
    captionRole,
    cellRole,
    codeRole,
    definitionRole,
    deletionRole,
    emphasisRole,
    figureRole,
    groupRole,
    imgRole,
    insertionRole,
    landmarkRole,
    listRole,
    listitemRole,
    logRole,
    marqueeRole,
    mathRole,
    noteRole,
    paragraphRole,
    statusRole,
    strongRole,
    subscriptRole,
    superscriptRole,
    tableRole,
    tabpanelRole,
    termRole,
    timeRole,
    tooltipRole,
  ],
  accessibleName: [],
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default sectionRole
