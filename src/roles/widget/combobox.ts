import articleRole from '../document/article'
import WidgetRole from '../widgetRole'

const comboboxRole = new WidgetRole({
  name: 'combobox',
  description:
    'An input that controls another element, such as a listbox or grid, that can dynamically pop up to help the user set the value of the input.',
  superclassRoles: ['input'],
  relatedConcepts: [
    {
      subject: '<select>',
      specification: 'HTML',
    },
  ],
  requiredAttributes: ['aria-controls', 'aria-expanded'],
  supportedAttributes: [
    'aria-activedescendant',
    'aria-autocomplete',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
    'aria-readonly',
    'aria-required',
  ],
  accessibleName: ['author'],
  nameRequired: true,
  implicitValues: [
    {
      attribute: 'aria-haspopup',
      value: 'listbox',
    },
  ],
})

export default comboboxRole
