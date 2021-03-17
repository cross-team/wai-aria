import AbstractRole from '../abstractRole';
const sectionheadRole = new AbstractRole({
    name: 'sectionhead',
    description: 'A structure that labels or summarizes the topic of its related section.',
    superclassRoles: ['structure'],
    subclassRoles: ['columnheader', 'heading', 'rowheader', 'tab'],
    accessibleName: ['contents', 'author'],
});
export default sectionheadRole;
