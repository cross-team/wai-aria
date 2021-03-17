import WindowRole from '../windowRole'

const dialogRole = new WindowRole({
  name: 'dialog',
  description:
    'A dialog is a descendant window of the primary window of a web application.',
  superclassRoles: ['window'],
  subclassRoles: ['alertdialog'],
  accessibleName: ['author'],
  nameRequired: true,
})

export default dialogRole
