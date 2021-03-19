import AbstractRole from '../abstractRole'
import gridRole from '../widget/grid'
import spinbuttonRole from '../widget/spinbutton'
import tablistRole from '../widget/tablist'
import selectRole from './select'
import widgetRole from './widget'

const compositeRole: AbstractRole = new AbstractRole({
  name: 'composite',
  description:
    'A widget that may contain navigable descendants or owned children.',
  superclassRoles: [widgetRole],
  subclassRoles: [gridRole, selectRole, spinbuttonRole, tablistRole],
  accessibleName: ['author'],
  supportedAttributes: ['aria-activedescendant', 'aria-disabled'],
  deprecatedAttributes: ['aria-errormessage', 'aria-haspopup', 'aria-invalid'],
})

export default compositeRole
