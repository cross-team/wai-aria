import DocumentStructureRole from '../documentRole';
const termRole = new DocumentStructureRole({
    name: 'term',
    description: 'A word or phrase with a corresponding definition.',
    superclassRoles: ['section'],
    relatedConcepts: [{ subject: '<dfn>', specification: 'HTML' }],
    accessibleName: ['author'],
});
export default termRole;
