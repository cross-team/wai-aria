import windowRole from '../abstract/window'
import WindowRole from '../windowRole'
import alertdialogRole from './alertdialog'

const dialogRole: WindowRole = new WindowRole({
  name: 'dialog',
  description:
    'A dialog is a descendant window of the primary window of a web application.',
  superclassRoles: [windowRole],
  subclassRoles: [alertdialogRole],
  accessibleName: ['author'],
  nameRequired: true,
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default dialogRole
