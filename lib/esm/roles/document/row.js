import DocumentStructureRole from '../documentRole';
const rowRole = new DocumentStructureRole({
    name: 'row',
    description: 'A row of cells in a tabular container.',
    superclassRoles: ['group', 'widget'],
    baseConcepts: [
        {
            subject: '<tr>',
            specification: 'HTML',
        },
    ],
    requiredContextRoles: ['grid', 'rowgroup', 'table', 'treegrid'],
    requiredOwnedElements: ['cell', 'columnheader', 'gridcell', 'rowheader'],
    supportedAttributes: [
        'aria-colindex',
        'aria-expanded',
        'aria-level',
        'aria-posinset',
        'aria-rowindex',
        'aria-setsize',
        'aria-selected',
    ],
    accessibleName: ['contents', 'author'],
});
export default rowRole;
