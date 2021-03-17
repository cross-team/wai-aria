import DocumentStructureRole from '../documentRole'

const separatorNoFocusRole = new DocumentStructureRole({
  name: 'separator',
  description:
    'A divider that separates and distinguishes sections of content or groups of menuitems.',
  superclassRoles: ['structure'],
  relatedConcepts: [
    {
      subject: '<hr>',
      specification: 'HTML',
    },
  ],
  supportedAttributes: ['aria-orientation'],
  accessibleName: ['author'],
  presentationalChildren: true,
  implicitValues: [
    {
      attribute: 'aria-orientation',
      value: 'horizontal',
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

export default separatorNoFocusRole
