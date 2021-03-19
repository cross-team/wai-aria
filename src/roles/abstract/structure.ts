import AbstractRole from '../abstractRole'
import applicationRole from '../document/application'
import documentRole from '../document/document'
import genericRole from '../document/generic'
import presentationRole from '../document/presentation'
import rowgroupRole from '../document/rowgroup'
import separatorNoFocusRole from '../document/separatorNoFocus'
import rangeRole from './range'
import roletypeRole from './roletype'
import sectionRole from './section'
import sectionheadRole from './sectionhead'

const structureRole: AbstractRole = new AbstractRole({
  name: 'structure',
  description: 'A document structural element.',
  superclassRoles: [roletypeRole],
  subclassRoles: [
    applicationRole,
    documentRole,
    genericRole,
    presentationRole,
    rangeRole,
    rowgroupRole,
    sectionRole,
    sectionheadRole,
    separatorNoFocusRole,
  ],
  accessibleName: [],
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default structureRole
