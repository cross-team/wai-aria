import DocumentStructureRole from '../documentRole'

const cellRole = new DocumentStructureRole({
  name: 'cell',
  description: 'A cell in a tabular container. See related gridcell.',
  superclassRoles: ['section'],
  subclassRoles: ['columnheader', 'gridcell', 'rowheader'],
  baseConcepts: [
    {
      subject: '<td>',
      specification: 'HTML',
    },
  ],
  requiredContextRoles: ['row'],
  supportedAttributes: [
    'aria-colindex',
    'aria-colspan',
    'aria-rowindex',
    'aria-rowspan',
  ],
  accessibleName: ['contents', 'author'],
})

export default cellRole
