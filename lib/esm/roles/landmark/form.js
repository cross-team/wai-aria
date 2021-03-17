import LandmarkRole from '../landmarkRole';
const formRole = new LandmarkRole({
    name: 'form',
    description: 'A landmark region that contains a collection of items and objects that, as a whole, combine to create a form.',
    superclassRoles: ['landmark'],
    baseConcepts: [
        {
            subject: '<form>',
            specification: 'HTML',
        },
    ],
    accessibleName: ['author'],
    nameRequired: true,
});
export default formRole;
