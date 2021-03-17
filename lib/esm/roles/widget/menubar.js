import WidgetRole from '../widgetRole';
const menubarRole = new WidgetRole({
    name: 'menubar',
    description: 'A presentation of menu that usually remains visible and is usually presented horizontally.',
    superclassRoles: ['menu'],
    relatedConcepts: ['toolbar'],
    requiredOwnedElements: [
        ['group', 'menuitem'],
        ['group', 'menuitemradio'],
        ['group', 'menuitemcheckbox'],
        'menuitem',
        'menuitemcheckbox',
        'menuitemradio',
    ],
    accessibleName: ['author'],
    implicitValues: [
        {
            attribute: 'aria-orientation',
            value: 'horizontal',
        },
    ],
});
export default menubarRole;
