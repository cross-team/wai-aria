import DocumentStructureRole from '../documentRole'

const definitionRole = new DocumentStructureRole({
  name: 'definition',
  description: 'A definition of a term or concept.',
  superclassRoles: ['section'],
  accessibleName: ['author'],
})

export default definitionRole
