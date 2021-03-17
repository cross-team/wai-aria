import DocumentStructureRole from '../documentRole';
const paragraphRole = new DocumentStructureRole({
    name: 'paragraph',
    description: 'A paragraph of content.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<p>',
            specification: 'HTML',
        },
    ],
    prohibitedAttributes: ['aria-label', 'aria-labelledby'],
    accessibleName: 'prohibited',
});
export default paragraphRole;
