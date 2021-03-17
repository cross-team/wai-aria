import WidgetRole from '../widgetRole'

const switchRole = new WidgetRole({
  name: 'switch',
  description:
    'A type of checkbox that represents on/off values, as opposed to checked/unchecked values.',
  superclassRoles: ['checkbox'],
  relatedConcepts: ['button'],
  requiredAttributes: ['aria-checked'],
  accessibleName: ['contents', 'author'],
  nameRequired: true,
  presentationalChildren: true,
})

export default switchRole
