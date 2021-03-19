import sectionRole from '../abstract/section'
import LiveRegionRole from '../liveRole'

const marqueeRole: LiveRegionRole = new LiveRegionRole({
  name: 'marquee',
  description:
    'A type of live region where non-essential information changes frequently.',
  superclassRoles: [sectionRole],
  accessibleName: ['author'],
  nameRequired: true,
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default marqueeRole
