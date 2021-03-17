import AbstractRole from '../abstractRole'

const windowRole = new AbstractRole({
  name: 'window',
  description: 'A browser or application window.',
  superclassRoles: ['roletype'],
  subclassRoles: ['dialog'],
  supportedAttributes: ['aria-modal'],
  accessibleName: ['author'],
})

export default windowRole
