import WidgetRole from '../widgetRole'

const menuitemcheckboxRole = new WidgetRole({
  name: 'menuitemcheckbox',
  description:
    'A menuitem with a checkable state whose possible values are true, false, or mixed.',
  superclassRoles: ['menuitem'],
  subclassRoles: ['menuitemradio'],
  relatedConcepts: ['menuitem'],
  requiredContextRoles: ['group', 'menu', 'menubar'],
  requiredAttributes: ['aria-checked'],
  accessibleName: ['contents', 'author'],
  nameRequired: true,
  presentationalChildren: true,
})

export default menuitemcheckboxRole
