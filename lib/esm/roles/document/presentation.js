import DocumentStructureRole from '../documentRole';
const presentationRole = new DocumentStructureRole({
    name: 'presentation',
    description: 'An element whose implicit native role semantics will not be mapped to the accessibility API.',
    superclassRoles: ['structure'],
    prohibitedAttributes: ['aria-label', 'aria-labelledby'],
    accessibleName: 'prohibited',
});
export default presentationRole;
