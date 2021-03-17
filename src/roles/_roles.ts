import AbstractRoles from './abstract/_abstractRoles'
import DocumentStructureRoles from './document/_documentRoles'
import LandmarkRoles from './landmark/_landmarkRoles'
import LiveRegionRoles from './live/_liveRoles'
import WidgetRoles from './widget/_widgetRoles'
import WindowRoles from './window/_windowRoles'

const AllRoles = [
  ...AbstractRoles,
  ...DocumentStructureRoles,
  ...LandmarkRoles,
  ...LiveRegionRoles,
  ...WidgetRoles,
  ...WindowRoles,
]

export default AllRoles
