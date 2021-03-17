import WidgetRole from '../widgetRole'

const textboxRole = new WidgetRole({
  name: 'textbox',
  description: 'A type of input that allows free-form text as its value.',
  superclassRoles: ['input'],
  subclassRoles: ['searchbox'],
  relatedConcepts: [
    {
      subject: '<textarea>',
      specification: 'HTML',
    },
    {
      subject: '<input[type="text"]>',
      specification: 'HTML',
    },
  ],
  supportedAttributes: [
    'aria-activedescendant',
    'aria-autocomplete',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
    'aria-multiline',
    'aria-placeholder',
    'aria-readonly',
    'aria-required',
  ],
  accessibleName: ['author'],
  nameRequired: true,
})

export default textboxRole
