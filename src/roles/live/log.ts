import sectionRole from '../abstract/section'
import LiveRegionRole from '../liveRole'

const logRole: LiveRegionRole = new LiveRegionRole({
  name: 'log',
  description:
    'A type of live region where new information is added in meaningful order and old information may disappear.',
  superclassRoles: [sectionRole],
  accessibleName: ['author'],
  implicitValues: [
    {
      attribute: 'aria-live',
      value: 'polite',
    },
  ],
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default logRole
