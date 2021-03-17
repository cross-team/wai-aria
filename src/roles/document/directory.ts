import DocumentStructureRole from '../documentRole'

const directoryRole = new DocumentStructureRole({
  name: 'directory',
  description:
    'A list of references to members of a group, such as a static table of contents.',
  superclassRoles: [],
  accessibleName: ['author'],
  deprecated: true,
})

export default directoryRole
