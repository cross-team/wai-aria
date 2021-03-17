import WidgetRole from '../widgetRole'

const menuRole = new WidgetRole({
  name: 'menu',
  description: 'A type of widget that offers a list of choices to the user.',
  superclassRoles: ['select'],
  subclassRoles: ['menubar'],
  relatedConcepts: ['list'],
  requiredOwnedElements: [
    ['group', 'menuitem'],
    ['group', 'menuitemradio'],
    ['group', 'menuitemcheckbox'],
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
  ],
  accessibleName: ['author'],
  implicitValues: [
    {
      attribute: 'aria-orientation',
      value: 'vertical',
    },
  ],
})

export default menuRole
