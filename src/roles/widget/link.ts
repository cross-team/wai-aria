import WidgetRole from '../widgetRole'

const linkRole = new WidgetRole({
  name: 'link',
  description:
    'An interactive reference to an internal or external resource that, when activated, causes the user agent to navigate to that resource.',
  superclassRoles: ['command'],
  relatedConcepts: [
    {
      subject: '<a>',
      specification: 'HTML',
    },
    {
      subject: '<link>',
      specification: 'HTML',
    },
  ],
  supportedAttributes: ['aria-disabled', 'aria-expanded', 'aria-haspopup'],
  accessibleName: ['contents', 'author'],
  nameRequired: true,
})

export default linkRole
