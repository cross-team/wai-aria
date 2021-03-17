import DocumentStructureRole from '../documentRole';
const documentRole = new DocumentStructureRole({
    name: 'document',
    description: 'An element containing content that assistive technology users may want to browse in a reading mode.',
    superclassRoles: ['structure'],
    subclassRoles: ['article'],
    accessibleName: ['author'],
    nameRequired: false,
});
export default documentRole;
