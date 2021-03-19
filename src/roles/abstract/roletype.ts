import AbstractRole from '../abstractRole'
import structureRole from './structure'
import widgetRole from './widget'
import windowRole from './window'

const roletypeRole: AbstractRole = new AbstractRole({
  name: 'roletype',
  description: 'The base role from which all other roles inherit.',
  superclassRoles: [],
  subclassRoles: [structureRole, widgetRole, windowRole],
  supportedAttributes: [
    'aria-atomic',
    'aria-busy',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-disabled',
    'aria-dropeffect',
    'aria-errormessage',
    'aria-flowto',
    'aria-grabbed',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-live',
    'aria-owns',
    'aria-relevant',
    'aria-roledescription',
  ],
  accessibleName: [],
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default roletypeRole
