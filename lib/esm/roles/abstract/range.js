import AbstractRole from '../abstractRole';
const rangeRole = new AbstractRole({
    name: 'range',
    description: 'An element representing a range of values.',
    superclassRoles: ['structure'],
    subclassRoles: ['meter', 'progressbar', 'scrollbar', 'slider', 'spinbutton'],
    supportedAttributes: [
        'aria-valuemax',
        'aria-valuemin',
        'aria-valuenow',
        'aria-valuetext',
    ],
    accessibleName: ['author'],
});
export default rangeRole;
