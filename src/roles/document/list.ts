import DocumentStructureRole from '../documentRole'

const listRole = new DocumentStructureRole({
  name: 'list',
  description: 'A section containing listitem elements.',
  superclassRoles: ['section'],
  subclassRoles: ['directory', 'feed'],
  baseConcepts: [
    {
      subject: '<ol>',
      specification: 'HTML',
    },
    {
      subject: '<ul>',
      specification: 'HTML',
    },
  ],
  requiredOwnedElements: ['listitem'],
  accessibleName: ['author'],
})

export default listRole
