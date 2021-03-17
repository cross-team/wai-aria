import DocumentStructureRole from '../documentRole'

const noteRole = new DocumentStructureRole({
  name: 'note',
  description:
    'A section whose content is parenthetic or ancillary to the main content of the resource.',
  superclassRoles: ['section'],
  accessibleName: ['author'],
})

export default noteRole
