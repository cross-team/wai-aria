import WidgetRole from '../widgetRole'

const treeRole = new WidgetRole({
  name: 'tree',
  description:
    'A widget that allows the user to select one or more items from a hierarchically organized collection.',
  superclassRoles: ['select'],
  subclassRoles: ['treegrid'],
  requiredOwnedElements: [['group', 'treeitem'], 'treeitem'],
  supportedAttributes: [
    'aria-errormessage',
    'aria-invalid',
    'aria-multiselectable',
    'aria-required',
  ],
  accessibleName: ['author'],
  nameRequired: true,
  implicitValues: [
    {
      attribute: 'aria-orientation',
      value: 'vertical',
    },
  ],
})

export default treeRole
