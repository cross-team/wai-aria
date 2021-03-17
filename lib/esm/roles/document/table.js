import DocumentStructureRole from '../documentRole';
const tableRole = new DocumentStructureRole({
    name: 'table',
    description: 'A section containing data arranged in rows and columns.',
    superclassRoles: ['section'],
    subclassRoles: ['grid'],
    baseConcepts: [
        {
            subject: '<table>',
            specification: 'HTML',
        },
    ],
    requiredOwnedElements: ['row', ['rowgroup', 'row']],
    supportedAttributes: ['aria-colcount', 'aria-rowcount'],
    accessibleName: ['author'],
    nameRequired: true,
});
export default tableRole;
