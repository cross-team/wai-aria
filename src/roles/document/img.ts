import DocumentStructureRole from '../documentRole'

const imgRole = new DocumentStructureRole({
  name: 'img',
  description: 'A container for a collection of elements that form an image.',
  superclassRoles: ['section'],
  relatedConcepts: [
    {
      subject: '<img>',
      specification: 'HTML',
    },
  ],
  accessibleName: ['author'],
  nameRequired: true,
  presentationalChildren: true,
})

export default imgRole
