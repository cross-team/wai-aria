import AbstractRole from '../abstractRole'

const commandRole = new AbstractRole({
  name: 'command',
  description:
    'A form of widget that performs an action but does not receive input data.',
  superclassRoles: ['widget'],
  subclassRoles: ['button', 'link', 'menuitem'],
  accessibleName: ['author'],
})

export default commandRole
