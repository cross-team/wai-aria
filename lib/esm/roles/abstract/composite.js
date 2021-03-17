import AbstractRole from '../abstractRole';
const compositeRole = new AbstractRole({
    name: 'composite',
    description: 'A widget that may contain navigable descendants or owned children.',
    superclassRoles: ['widget'],
    subclassRoles: ['grid', 'select', 'spinbutton', 'tablist'],
    accessibleName: ['author'],
    supportedAttributes: ['aria-activedescendant', 'aria-disabled'],
});
export default compositeRole;
