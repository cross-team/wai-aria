import AbstractRole from '../abstractRole'

const structureRole = new AbstractRole({
  name: 'structure',
  description: 'A document structural element.',
  superclassRoles: ['roletype'],
  subclassRoles: [
    'application',
    'document',
    'generic',
    'presentation',
    'range',
    'rowgroup',
    'section',
    'sectionhead',
    'separator',
  ],
  accessibleName: [],
})

export default structureRole
