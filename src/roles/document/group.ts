import DocumentStructureRole from '../documentRole'

const groupRole = new DocumentStructureRole({
  name: 'group',
  description:
    'A set of user interface objects that is not intended to be included in a page summary or table of contents by assistive technologies.',
  superclassRoles: ['section'],
  subclassRoles: ['row', 'select', 'toolbar'],
  relatedConcepts: [
    {
      subject: '<fieldset>',
      specification: 'HTML',
    },
  ],
  supportedAttributes: ['aria-activedescendant', 'aria-disabled'],
  accessibleName: ['author'],
})

export default groupRole
