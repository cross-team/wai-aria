import LandmarkRole from '../landmarkRole'

const regionRole = new LandmarkRole({
  name: 'region',
  description:
    'A landmark containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page.',
  superclassRoles: ['landmark'],
  relatedConcepts: [
    {
      subject: '<section>',
      specification: 'HTML',
    },
  ],
  accessibleName: ['author'],
  nameRequired: true,
})

export default regionRole
