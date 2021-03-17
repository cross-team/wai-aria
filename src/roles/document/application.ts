import DocumentStructureRole from '../documentRole'

const applicationRole = new DocumentStructureRole({
  name: 'application',
  description:
    'A structure containing one or more focusable elements requiring user input, such as keyboard or gesture events, that do not follow a standard interaction pattern supported by a widget role.',
  superclassRoles: ['structure'],
  supportedAttributes: [
    'aria-activedescendant',
    'aria-disabled',
    'aria-errormessage',
    'aria-expanded',
    'aria-haspopup',
    'aria-invalid',
  ],
  accessibleName: ['author'],
  nameRequired: true,
})

export default applicationRole
