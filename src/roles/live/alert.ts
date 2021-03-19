import sectionRole from '../abstract/section'
import LiveRegionRole from '../liveRole'
import alertdialogRole from '../window/alertdialog'

const alertRole: LiveRegionRole = new LiveRegionRole({
  name: 'alert',
  description:
    'A type of live region with important, and usually time-sensitive, information.',
  superclassRoles: [sectionRole],
  subclassRoles: [alertdialogRole],
  accessibleName: ['author'],
  implicitValues: [
    {
      attribute: 'aria-live',
      value: 'assertive',
    },
    {
      attribute: 'aria-atomic',
      value: 'true',
    },
  ],
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default alertRole
