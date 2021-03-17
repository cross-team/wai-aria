import WidgetRole from '../widgetRole';
const treeitemRole = new WidgetRole({
    name: 'treeitem',
    description: 'An option item of a tree. This is an element within a tree that may be expanded or collapsed if it contains a sub-level group of tree item elements.',
    superclassRoles: ['listitem', 'option'],
    requiredContextRoles: ['group', 'tree'],
    supportedAttributes: ['aria-expanded', 'aria-haspopup'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
});
export default treeitemRole;
