import LandmarkRole from '../landmarkRole'

const complementaryRole = new LandmarkRole({
  name: 'complementary',
  description:
    'A landmark that is designed to be complementary to the main content at a similar level in the DOM hierarchy, but remaining meaningful when separated from the main content.',
  superclassRoles: ['landmark'],
  accessibleName: ['author'],
})

export default complementaryRole
