import AbstractRole from '../abstractRole'
import rowRole from '../document/row'
import gridcellRole from '../widget/gridcell'
import progressbarRole from '../widget/progressbar'
import scrollbarRole from '../widget/scrollbar'
import separatorFocusRole from '../widget/separatorFocus'
import tabRole from '../widget/tab'
import commandRole from './command'
import compositeRole from './composite'
import inputRole from './input'
import roletypeRole from './roletype'

const widgetRole: AbstractRole = new AbstractRole({
  name: 'widget',
  description: 'An interactive component of a graphical user interface (GUI).',
  superclassRoles: [roletypeRole],
  subclassRoles: [
    commandRole,
    compositeRole,
    gridcellRole,
    inputRole,
    progressbarRole,
    rowRole,
    scrollbarRole,
    separatorFocusRole,
    tabRole,
  ],
  accessibleName: [],
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default widgetRole
