import LandmarkRole from '../landmarkRole'

const searchRole = new LandmarkRole({
  name: 'search',
  description:
    'A landmark region that contains a collection of items and objects that, as a whole, combine to create a search facility.',
  superclassRoles: ['landmark'],
  accessibleName: ['author'],
})

export default searchRole
