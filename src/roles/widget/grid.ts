import WidgetRole from '../widgetRole'

const gridRole = new WidgetRole({
  name: 'grid',
  description:
    'A composite widget containing a collection of one or more rows with one or more cells where some or all cells in the grid are focusable by using methods of two-dimensional navigation, such as directional arrow keys.',
  superclassRoles: ['composite', 'table'],
  subclassRoles: ['treegrid'],
  baseConcepts: [
    {
      subject: '<table>',
      specification: 'HTML',
    },
  ],
  requiredOwnedElements: ['row', ['rowgroup', 'row']],
  supportedAttributes: ['aria-multiselectable', 'aria-readonly'],
  accessibleName: ['author'],
  nameRequired: true,
})

export default gridRole
