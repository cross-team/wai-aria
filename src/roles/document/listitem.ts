import DocumentStructureRole from '../documentRole'

const listitemRole = new DocumentStructureRole({
  name: 'listitem',
  description: 'A single item in a list or directory.',
  superclassRoles: ['section'],
  subclassRoles: ['treeitem'],
  baseConcepts: [
    {
      subject: '<li>',
      specification: 'HTML',
    },
  ],
  requiredContextRoles: ['directory', 'list'],
  supportedAttributes: ['aria-level', 'aria-posinset', 'aria-setsize'],
  accessibleName: ['author'],
})

export default listitemRole
