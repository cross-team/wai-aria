import WidgetRole from '../widgetRole';
const menuitemradioRole = new WidgetRole({
    name: 'menuitemradio',
    description: 'A checkable menuitem in a set of elements with the same role, only one of which can be checked at a time.',
    superclassRoles: ['menuitemcheckbox'],
    relatedConcepts: ['menuitem'],
    requiredContextRoles: ['group', 'menu', 'menubar'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
    presentationalChildren: true,
});
export default menuitemradioRole;
