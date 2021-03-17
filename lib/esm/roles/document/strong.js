import DocumentStructureRole from '../documentRole';
const strongRole = new DocumentStructureRole({
    name: 'strong',
    description: 'Content that is important, serious, or urgent. See related emphasis.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<strong>',
            specification: 'HTML',
        },
    ],
    prohibitedAttributes: ['aria-label', 'aria-labelledby'],
    accessibleName: 'prohibited',
});
export default strongRole;
