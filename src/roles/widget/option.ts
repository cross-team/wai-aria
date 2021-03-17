import WidgetRole from '../widgetRole'

const optionRole = new WidgetRole({
  name: 'option',
  description: 'A selectable item in a listbox.',
  superclassRoles: ['input'],
  subclassRoles: ['treeitem'],
  baseConcepts: [
    {
      subject: '<option>',
      specification: 'HTML',
    },
  ],
  relatedConcepts: ['listitem'],
  requiredContextRoles: ['group', 'listbox'],
  requiredAttributes: ['aria-selected'],
  supportedAttributes: ['aria-checked', 'aria-posinset', 'aria-setsize'],
  accessibleName: ['contents', 'author'],
  nameRequired: true,
  presentationalChildren: true,
  implicitValues: [
    {
      attribute: 'aria-selected',
      value: 'false',
    },
  ],
})

export default optionRole
