import DocumentStructureRole from '../documentRole'

const toolbarRole = new DocumentStructureRole({
  name: 'toolbar',
  description:
    'A collection of commonly used function buttons or controls represented in compact visual form.',
  superclassRoles: ['group'],
  relatedConcepts: ['menubar'],
  supportedAttributes: ['aria-orientation'],
  accessibleName: ['author'],
  implicitValues: [
    {
      attribute: 'aria-orientation',
      value: 'horizontal',
    },
  ],
})

export default toolbarRole
