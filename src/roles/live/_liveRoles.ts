import LiveRegionRole from '../liveRole'
import alertRole from './alert'
import logRole from './log'
import marqueeRole from './marquee'
import statusRole from './status'
import timerRole from './timer'

const LiveRegionRoles: Array<LiveRegionRole> = [
  alertRole,
  logRole,
  marqueeRole,
  statusRole,
  timerRole,
]

export default LiveRegionRoles
