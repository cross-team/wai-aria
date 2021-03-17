import LandmarkRole from '../landmarkRole';
const bannerRole = new LandmarkRole({
    name: 'banner',
    description: 'A landmark that contains mostly site-oriented content, rather than page-specific content.',
    superclassRoles: ['landmark'],
    accessibleName: ['author'],
});
export default bannerRole;
