import AbstractRole from '../abstractRole'
import columnheaderRole from '../document/columnheader'
import headingRole from '../document/heading'
import rowheaderRole from '../document/rowheader'
import tabRole from '../widget/tab'
import structureRole from './structure'

const sectionheadRole: AbstractRole = new AbstractRole({
  name: 'sectionhead',
  description:
    'A structure that labels or summarizes the topic of its related section.',
  superclassRoles: [structureRole],
  subclassRoles: [columnheaderRole, headingRole, rowheaderRole, tabRole],
  accessibleName: ['contents', 'author'],
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default sectionheadRole
