import DocumentStructureRole from '../documentRole'

const mathRole = new DocumentStructureRole({
  name: 'math',
  description: 'Content that represents a mathematical expression.',
  superclassRoles: ['section'],
  accessibleName: ['author'],
  presentationalChildren: false,
})

export default mathRole
