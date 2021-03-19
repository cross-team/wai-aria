import alertRole from '../live/alert'
import WindowRole from '../windowRole'
import dialogRole from './dialog'

const alertdialogRole: WindowRole = new WindowRole({
  name: 'alertdialog',
  description:
    'A type of dialog that contains an alert message, where initial focus goes to an element within the dialog.',
  superclassRoles: [alertRole, dialogRole],
  accessibleName: ['author'],
  nameRequired: true,
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default alertdialogRole
