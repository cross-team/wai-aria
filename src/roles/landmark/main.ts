import LandmarkRole from '../landmarkRole'

const mainRole = new LandmarkRole({
  name: 'main',
  description: 'A landmark containing the main content of a document.',
  superclassRoles: ['landmark'],
  accessibleName: ['author'],
})

export default mainRole
