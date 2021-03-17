import DocumentStructureRole from '../documentRole'

const feedRole = new DocumentStructureRole({
  name: 'feed',
  description:
    'A scrollable list of articles where scrolling may cause articles to be added to or removed from either end of the list.',
  superclassRoles: ['list'],
  requiredOwnedElements: ['article'],
  accessibleName: ['author'],
  nameRequired: false,
})

export default feedRole
