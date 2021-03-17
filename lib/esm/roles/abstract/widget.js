import AbstractRole from '../abstractRole';
const widgetRole = new AbstractRole({
    name: 'widget',
    description: 'An interactive component of a graphical user interface (GUI).',
    superclassRoles: ['roletype'],
    subclassRoles: [
        'command',
        'composite',
        'gridcell',
        'input',
        'progressbar',
        'row',
        'scrollbar',
        'separator',
        'tab',
    ],
    accessibleName: [],
});
export default widgetRole;
