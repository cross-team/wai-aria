import DocumentStructureRole from '../documentRole'

const deletionRole = new DocumentStructureRole({
  name: 'deletion',
  description:
    'A deletion contains content that is marked as removed or content that is being suggested for removal.',
  superclassRoles: ['section'],
  relatedConcepts: [
    {
      subject: '<del>',
      specification: 'HTML',
    },
  ],
  prohibitedAttributes: ['aria-label', 'aria-labelledby'],
  accessibleName: 'prohibited',
})

export default deletionRole
