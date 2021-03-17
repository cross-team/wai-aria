import DocumentStructureRole from '../documentRole'

const captionRole = new DocumentStructureRole({
  name: 'caption',
  description:
    'Visible content that names, and may also describe, a figure, table, grid, or treegrid.',
  superclassRoles: ['section'],
  relatedConcepts: [
    {
      subject: '<caption>',
      specification: 'HTML',
    },
    {
      subject: '<figcaption>',
      specification: 'HTML',
    },
  ],
  requiredContextRoles: ['figure', 'grid', 'table', 'treegrid'],
  prohibitedAttributes: ['aria-label', 'aria-labelledby'],
  accessibleName: 'prohibited',
})

export default captionRole
