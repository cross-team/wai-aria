import WidgetRole from '../widgetRole'

const tablistRole = new WidgetRole({
  name: 'tablist',
  description:
    'A list of tab elements, which are references to tabpanel elements.',
  superclassRoles: ['composite'],
  requiredOwnedElements: ['tab'],
  supportedAttributes: ['aria-multiselectable', 'aria-orientation'],
  accessibleName: ['author'],
  implicitValues: [
    {
      attribute: 'aria-orientation',
      value: 'horizontal',
    },
  ],
})

export default tablistRole
