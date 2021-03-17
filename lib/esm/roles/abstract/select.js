import AbstractRole from '../abstractRole';
const selectRole = new AbstractRole({
    name: 'select',
    description: 'A form widget that allows the user to make selections from a set of choices.',
    superclassRoles: ['composite', 'group'],
    subclassRoles: ['listbox', 'menu', 'radiogroup', 'tree'],
    supportedAttributes: ['aria-orientation'],
    accessibleName: ['author'],
});
export default selectRole;
