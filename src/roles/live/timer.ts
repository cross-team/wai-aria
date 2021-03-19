import LiveRegionRole from '../liveRole'
import statusRole from './status'

const timerRole: LiveRegionRole = new LiveRegionRole({
  name: 'timer',
  description:
    'A type of live region containing a numerical counter which indicates an amount of elapsed time from a start point, or the time remaining until an end point.',
  superclassRoles: [statusRole],
  accessibleName: ['author'],
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default timerRole
