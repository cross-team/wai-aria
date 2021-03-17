import DocumentStructureRole from '../documentRole';
const insertionRole = new DocumentStructureRole({
    name: 'insertion',
    description: 'An insertion contains content that is marked as added or content that is being suggested for addition.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<ins>',
            specification: 'HTML',
        },
    ],
    prohibitedAttributes: ['aria-label', 'aria-labelledby'],
    accessibleName: 'prohibited',
});
export default insertionRole;
