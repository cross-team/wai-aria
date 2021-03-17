import WidgetRole from '../widgetRole'

const treegridRole = new WidgetRole({
  name: 'treegrid',
  description:
    'A grid whose rows can be expanded and collapsed in the same manner as for a tree.',
  superclassRoles: ['grid', 'tree'],
  requiredOwnedElements: ['row', ['rowgroup', 'row']],
  accessibleName: ['author'],
  nameRequired: true,
})

export default treegridRole
