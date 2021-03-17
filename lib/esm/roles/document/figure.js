import DocumentStructureRole from '../documentRole';
const figureRole = new DocumentStructureRole({
    name: 'figure',
    description: 'A perceivable section of content that typically contains a graphical document, images, code snippets, or example text.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<figure>',
            specification: 'HTML',
        },
    ],
    accessibleName: ['author'],
    nameRequired: false,
});
export default figureRole;
