import LiveRegionRole from '../liveRole'

const marqueeRole = new LiveRegionRole({
  name: 'marquee',
  description:
    'A type of live region where non-essential information changes frequently.',
  superclassRoles: ['section'],
  accessibleName: ['author'],
  nameRequired: true,
})

export default marqueeRole
