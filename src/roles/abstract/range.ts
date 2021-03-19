import AbstractRole from '../abstractRole'
import meterRole from '../document/meter'
import progressbarRole from '../widget/progressbar'
import scrollbarRole from '../widget/scrollbar'
import sliderRole from '../widget/slider'
import spinbuttonRole from '../widget/spinbutton'
import structureRole from './structure'

const rangeRole: AbstractRole = new AbstractRole({
  name: 'range',
  description: 'An element representing a range of values.',
  superclassRoles: [structureRole],
  subclassRoles: [
    meterRole,
    progressbarRole,
    scrollbarRole,
    sliderRole,
    spinbuttonRole,
  ],
  supportedAttributes: [
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext',
  ],
  accessibleName: ['author'],
  deprecatedAttributes: [
    'aria-disabled',
    'aria-errormessage',
    'aria-haspopup',
    'aria-invalid',
  ],
})

export default rangeRole
