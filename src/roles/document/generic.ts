import DocumentStructureRole from '../documentRole'

const genericRole = new DocumentStructureRole({
  name: 'generic',
  description:
    'A nameless container element that has no semantic meaning on its own.',
  superclassRoles: ['structure'],
  relatedConcepts: [
    {
      subject: 'div',
      specification: 'HTML',
    },
    {
      subject: 'span',
      specification: 'HTML',
    },
  ],
  prohibitedAttributes: [
    'aria-label',
    'aria-labelledby',
    'aria-roledescription',
  ],
  accessibleName: 'prohibited',
})

export default genericRole
