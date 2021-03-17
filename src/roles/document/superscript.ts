import DocumentStructureRole from '../documentRole'

const superscriptRole = new DocumentStructureRole({
  name: 'superscript',
  description: 'One or more superscripted characters.',
  superclassRoles: ['section'],
  relatedConcepts: [
    {
      subject: '<sub>',
      specification: 'HTML',
    },
    {
      subject: '<sup>',
      specification: 'HTML',
    },
  ],
  prohibitedAttributes: ['aria-label', 'aria-labelledby'],
  accessibleName: 'prohibited',
})

export default superscriptRole
