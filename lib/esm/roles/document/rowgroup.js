import DocumentStructureRole from '../documentRole';
const rowgroupRole = new DocumentStructureRole({
    name: 'rowgroup',
    description: 'A structure containing one or more row elements in a tabular container.',
    superclassRoles: ['structure'],
    baseConcepts: [
        {
            subject: '<tbody>',
            specification: 'HTML',
        },
        {
            subject: '<tfoot>',
            specification: 'HTML',
        },
        {
            subject: '<thead>',
            specification: 'HTML',
        },
    ],
    requiredContextRoles: ['grid', 'table', 'tree'],
    requiredOwnedElements: ['row'],
    accessibleName: ['author'],
});
export default rowgroupRole;
