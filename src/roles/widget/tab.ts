import WidgetRole from '../widgetRole'

const tabRole = new WidgetRole({
  name: 'tab',
  description:
    'A grouping label providing a mechanism for selecting the tab content that is to be rendered to the user.',
  superclassRoles: ['sectionhead', 'widget'],
  requiredContextRoles: ['tablist'],
  supportedAttributes: [
    'aria-disabled',
    'aria-expanded',
    'aria-haspopup',
    'aria-posinset',
    'aria-selected',
    'aria-setsize',
  ],
  accessibleName: ['contents', 'author'],
  presentationalChildren: true,
  implicitValues: [
    {
      attribute: 'aria-selected',
      value: 'false',
    },
  ],
})

export default tabRole
