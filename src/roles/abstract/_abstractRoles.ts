import AbstractRole from '../abstractRole'
import commandRole from './command'
import compositeRole from './composite'
import inputRole from './input'
import landmarkRole from './landmark'
import rangeRole from './range'
import roletypeRole from './roletype'
import sectionRole from './section'
import sectionheadRole from './sectionhead'
import selectRole from './select'
import structureRole from './structure'
import widgetRole from './widget'
import windowRole from './window'

const AbstractRoles: Array<AbstractRole> = [
  commandRole,
  compositeRole,
  inputRole,
  landmarkRole,
  rangeRole,
  roletypeRole,
  sectionRole,
  sectionheadRole,
  selectRole,
  structureRole,
  widgetRole,
  windowRole,
]

export default AbstractRoles
