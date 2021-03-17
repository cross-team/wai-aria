import WidgetRole from '../widgetRole'

const searchboxRole = new WidgetRole({
  name: 'searchbox',
  description: 'A type of textbox intended for specifying search criteria.',
  superclassRoles: ['textbox'],
  baseConcepts: [
    {
      subject: '<input[type="search"]>',
      specification: 'HTML',
    },
  ],
  accessibleName: ['author'],
  nameRequired: true,
})

export default searchboxRole
