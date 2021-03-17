import DocumentStructureRole from '../documentRole'

const columnheaderRole = new DocumentStructureRole({
  name: 'columnheader',
  description: 'A cell containing header information for a column.',
  superclassRoles: ['cell', 'gridcell', 'sectionhead'],
  baseConcepts: [{ subject: '<th[scope="col"]>', specification: 'HTML' }],
  requiredContextRoles: ['row'],
  supportedAttributes: ['aria-sort'],
  accessibleName: ['contents', 'author'],
  nameRequired: true,
})

export default columnheaderRole
