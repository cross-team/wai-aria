import WidgetRole from '../widgetRole'

const listboxRole = new WidgetRole({
  name: 'listbox',
  description:
    'A widget that allows the user to select one or more items from a list of choices.',
  superclassRoles: ['select'],
  relatedConcepts: [
    'list',
    {
      subject: '<select>',
      specification: 'HTML',
    },
  ],
  requiredOwnedElements: [['group', 'option'], 'option'],
  supportedAttributes: [
    'aria-errormessage',
    'aria-expanded',
    'aria-invalid',
    'aria-multiselectable',
    'aria-readonly',
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

export default listboxRole
