import LiveRegionRole from '../liveRole'

const timerRole = new LiveRegionRole({
  name: 'timer',
  description:
    'A type of live region containing a numerical counter which indicates an amount of elapsed time from a start point, or the time remaining until an end point.',
  superclassRoles: ['status'],
  accessibleName: ['author'],
})

export default timerRole
