import WidgetRole from '../widgetRole'

const buttonRole = new WidgetRole({
  name: 'button',
  description:
    'An input that allows for user-triggered actions when clicked or pressed.',
  superclassRoles: ['command'],
  baseConcepts: [
    {
      subject: '<button>',
      specification: 'HTML',
    },
  ],
  relatedConcepts: ['link'],
  supportedAttributes: [
    'aria-disabled',
    'aria-haspopup',
    'aria-expanded',
    'aria-pressed',
  ],
  accessibleName: ['contents', 'author'],
  nameRequired: true,
  presentationalChildren: true,
})

export default buttonRole
