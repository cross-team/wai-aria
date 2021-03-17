import AbstractRole from '../abstractRole';
const inputRole = new AbstractRole({
    name: 'input',
    description: 'A generic type of widget that allows user input.',
    superclassRoles: ['widget'],
    subclassRoles: [
        'checkbox',
        'combobox',
        'option',
        'radio',
        'slider',
        'spinbutton',
        'textbox',
    ],
    supportedAttributes: ['aria-disabled'],
    accessibleName: ['author'],
});
export default inputRole;
