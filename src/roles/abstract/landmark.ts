import AbstractRole from '../abstractRole'

const landmarkRole = new AbstractRole({
  name: 'landmark',
  description:
    'A perceivable section containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page.',
  superclassRoles: ['section'],
  subclassRoles: [
    'banner',
    'complementary',
    'contentinfo',
    'form',
    'main',
    'navigation',
    'region',
    'search',
  ],
  accessibleName: ['author'],
  nameRequired: false,
})

export default landmarkRole
