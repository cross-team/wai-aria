import DocumentStructureRole from '../documentRole';
const subscriptRole = new DocumentStructureRole({
    name: 'subscript',
    description: 'One or more subscripted characters.',
    superclassRoles: ['section'],
    relatedConcepts: [
        {
            subject: '<sub>',
            specification: 'HTML',
        },
        {
            subject: '<sup>',
            specification: 'HTML',
        },
    ],
    prohibitedAttributes: ['aria-label', 'aria-labelledby'],
    accessibleName: 'prohibited',
});
export default subscriptRole;
