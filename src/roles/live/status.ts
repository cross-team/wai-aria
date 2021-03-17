import LiveRegionRole from '../liveRole'

const statusRole = new LiveRegionRole({
  name: 'status',
  description:
    'A type of live region whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar.',
  superclassRoles: ['section'],
  subclassRoles: ['timer'],
  accessibleName: ['author'],
  implicitValues: [
    {
      attribute: 'aria-live',
      value: 'polite',
    },
    {
      attribute: 'aria-atomic',
      value: 'true',
    },
  ],
})

export default statusRole
