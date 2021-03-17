import WidgetRole from '../widgetRole';
const spinbuttonRole = new WidgetRole({
    name: 'spinbutton',
    description: 'A form of range that expects the user to select from among discrete choices.',
    superclassRoles: ['composite', 'input', 'range'],
    supportedAttributes: [
        'aria-errormessage',
        'aria-invalid',
        'aria-readonly',
        'aria-required',
        'aria-valuemax',
        'aria-valuemin',
        'aria-valuenow',
        'aria-valuetext',
    ],
    accessibleName: ['author'],
    nameRequired: true,
    implicitValues: [
        {
            attribute: 'aria-valuemin',
            value: 'none',
        },
        {
            attribute: 'aria-valuemax',
            value: 'none',
        },
        {
            attribute: 'aria-valuenow',
            value: 'none',
        },
    ],
});
export default spinbuttonRole;
