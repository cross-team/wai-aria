import DocumentStructureRole from '../documentRole'

const blockquoteRole = new DocumentStructureRole({
  name: 'blockquote',
  description: 'A section of content that is quoted from another source.',
  superclassRoles: ['section'],
  relatedConcepts: [
    {
      subject: '<blockquote>',
      specification: 'HTML',
    },
  ],
  accessibleName: ['author'],
})

export default blockquoteRole
