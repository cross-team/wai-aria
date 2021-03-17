import LandmarkRole from '../landmarkRole';
const navigationRole = new LandmarkRole({
    name: 'navigation',
    description: 'A landmark containing a collection of navigational elements (usually links) for navigating the document or related documents.',
    superclassRoles: ['landmark'],
    relatedConcepts: [
        {
            subject: '<nav>',
            specification: 'HTML',
        },
    ],
    accessibleName: ['author'],
});
export default navigationRole;
