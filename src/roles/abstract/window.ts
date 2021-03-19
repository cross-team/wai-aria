import AbstractRole from '../abstractRole'
import dialogRole from '../window/dialog'
import roletypeRole from './roletype'

const windowRole: AbstractRole = new AbstractRole({
  name: 'window',
  description: 'A browser or application window.',
  superclassRoles: [roletypeRole],
  subclassRoles: [dialogRole],
  supportedAttributes: ['aria-modal'],
  accessibleName: ['author'],
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default windowRole
