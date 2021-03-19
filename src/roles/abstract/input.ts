import AbstractRole from '../abstractRole'
import checkboxRole from '../widget/checkbox'
import comboboxRole from '../widget/combobox'
import optionRole from '../widget/option'
import radioRole from '../widget/radio'
import sliderRole from '../widget/slider'
import spinbuttonRole from '../widget/spinbutton'
import textboxRole from '../widget/textbox'
import widgetRole from './widget'

const inputRole: AbstractRole = new AbstractRole({
  name: 'input',
  description: 'A generic type of widget that allows user input.',
  superclassRoles: [widgetRole],
  subclassRoles: [
    checkboxRole,
    comboboxRole,
    optionRole,
    radioRole,
    sliderRole,
    spinbuttonRole,
    textboxRole,
  ],
  supportedAttributes: ['aria-disabled'],
  accessibleName: ['author'],
  deprecatedAttributes: ['aria-errormessage', 'aria-haspopup', 'aria-invalid'],
})

export default inputRole
