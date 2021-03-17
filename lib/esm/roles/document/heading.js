import DocumentStructureRole from '../documentRole';
const headingRole = new DocumentStructureRole({
    name: 'heading',
    description: 'A heading for a section of the page.',
    superclassRoles: ['sectionhead'],
    relatedConcepts: [
        {
            subject: '<h1>',
            specification: 'HTML',
        },
        {
            subject: '<h2>',
            specification: 'HTML',
        },
        {
            subject: '<h3>',
            specification: 'HTML',
        },
        {
            subject: '<h4>',
            specification: 'HTML',
        },
        {
            subject: '<h5>',
            specification: 'HTML',
        },
        {
            subject: '<h6>',
            specification: 'HTML',
        },
    ],
    requiredAttributes: ['aria-level'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
});
export default headingRole;
