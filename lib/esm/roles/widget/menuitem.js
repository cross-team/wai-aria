import WidgetRole from '../widgetRole';
const menuitemRole = new WidgetRole({
    name: 'menuitem',
    description: 'An option in a set of choices contained by a menu or menubar.',
    superclassRoles: ['command'],
    subclassRoles: ['menuitemcheckbox'],
    relatedConcepts: ['listitem', 'option'],
    requiredContextRoles: ['group', 'menu', 'menubar'],
    supportedAttributes: [
        'aria-disabled',
        'aria-expanded',
        'aria-haspopup',
        'aria-posinset',
        'aria-setsize',
    ],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
});
export default menuitemRole;
