import AbstractRole from '../abstractRole'
import buttonRole from '../widget/button'
import linkRole from '../widget/link'
import menuitemRole from '../widget/menuitem'
import widgetRole from './widget'

const commandRole: AbstractRole = new AbstractRole({
  name: 'command',
  description:
    'A form of widget that performs an action but does not receive input data.',
  superclassRoles: [widgetRole],
  subclassRoles: [buttonRole, linkRole, menuitemRole],
  accessibleName: ['author'],
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default commandRole
