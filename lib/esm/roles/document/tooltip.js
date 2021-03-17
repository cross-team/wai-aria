import DocumentStructureRole from '../documentRole';
const tooltipRole = new DocumentStructureRole({
    name: 'tooltip',
    description: 'A contextual popup that displays a description for an element.',
    superclassRoles: ['section'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
});
export default tooltipRole;
