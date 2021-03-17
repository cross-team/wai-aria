import LandmarkRole from '../landmarkRole'

const contentinfoRole = new LandmarkRole({
  name: 'contentinfo',
  description:
    'A landmark that contains information about the parent document.',
  superclassRoles: ['landmark'],
  accessibleName: ['author'],
})

export default contentinfoRole
