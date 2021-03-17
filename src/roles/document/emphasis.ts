import DocumentStructureRole from '../documentRole'

const emphasisRole = new DocumentStructureRole({
  name: 'emphasis',
  description: 'One or more emphasized characters.',
  superclassRoles: ['section'],
  relatedConcepts: [
    {
      subject: '<em>',
      specification: 'HTML',
    },
  ],
  prohibitedAttributes: ['aria-label', 'aria-labelledby'],
  accessibleName: 'prohibited',
})

export default emphasisRole
