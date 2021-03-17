import WidgetRole from '../widgetRole'

const scrollbarRole = new WidgetRole({
  name: 'scrollbar',
  description:
    'A graphical object that controls the scrolling of content within a viewing area, regardless of whether the content is fully displayed within the viewing area.',
  superclassRoles: ['range', 'widget'],
  requiredAttributes: ['aria-controls', 'aria-valuenow'],
  supportedAttributes: [
    'aria-disabled',
    'aria-orientation',
    'aria-valuemax',
    'aria-valuemin',
  ],
  accessibleName: ['author'],
  nameRequired: false,
  presentationalChildren: true,
  implicitValues: [
    {
      attribute: 'aria-orientation',
      value: 'vertical',
    },
    {
      attribute: 'aria-valuemin',
      value: '0',
    },
    {
      attribute: 'aria-valuemax',
      value: '100',
    },
  ],
})

export default scrollbarRole
