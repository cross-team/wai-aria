import DocumentStructureRole from '../documentRole';
const timeRole = new DocumentStructureRole({
    name: 'time',
    description: 'An element that represents a specific point in time.',
    superclassRoles: ['section'],
    relatedConcepts: [{ subject: '<time>', specification: 'HTML' }],
    accessibleName: ['author'],
});
export default timeRole;
