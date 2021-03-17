import DocumentStructureRole from '../documentRole';
const rowheaderRole = new DocumentStructureRole({
    name: 'rowheader',
    description: 'A cell containing header information for a row.',
    superclassRoles: ['cell', 'gridcell', 'sectionhead'],
    baseConcepts: [
        {
            subject: '<th[scope="row"]>',
            specification: 'HTML',
        },
    ],
    requiredContextRoles: ['row'],
    supportedAttributes: ['aria-expanded', 'aria-sort'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
});
export default rowheaderRole;
