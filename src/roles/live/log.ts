import LiveRegionRole from '../liveRole'

const logRole = new LiveRegionRole({
  name: 'log',
  description:
    'A type of live region where new information is added in meaningful order and old information may disappear.',
  superclassRoles: ['section'],
  accessibleName: ['author'],
  implicitValues: [
    {
      attribute: 'aria-live',
      value: 'polite',
    },
  ],
})

export default logRole
