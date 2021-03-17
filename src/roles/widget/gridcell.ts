import WidgetRole from '../widgetRole'

const gridcellRole = new WidgetRole({
  name: 'gridcell',
  description: 'A cell in a grid or treegrid.',
  superclassRoles: ['cell', 'widget'],
  subclassRoles: ['columnheader', 'rowheader'],
  baseConcepts: [
    {
      subject: '<td>',
      specification: 'HTML',
    },
  ],
  requiredContextRoles: ['row'],
  supportedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-expanded',
    'aria-haspopup',
    'aria-invalid',
    'aria-readonly',
    'aria-required',
    'aria-selected',
  ],
  accessibleName: ['contents', 'author'],
})

export default gridcellRole
