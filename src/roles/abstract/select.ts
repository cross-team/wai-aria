import AbstractRole from '../abstractRole'
import groupRole from '../document/group'
import listboxRole from '../widget/listbox'
import menuRole from '../widget/menu'
import radiogroupRole from '../widget/radiogroup'
import treeRole from '../widget/tree'
import compositeRole from './composite'

const selectRole: AbstractRole = new AbstractRole({
  name: 'select',
  description:
    'A form widget that allows the user to make selections from a set of choices.',
  superclassRoles: [compositeRole, groupRole],
  subclassRoles: [listboxRole, menuRole, radiogroupRole, treeRole],
  supportedAttributes: ['aria-orientation'],
  accessibleName: ['author'],
  deprecatedAttributes: ['aria-errormessage', 'aria-haspopup', 'aria-invalid'],
})

export default selectRole
