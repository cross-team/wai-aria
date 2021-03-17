import WidgetRole from '../widgetRole';
const sliderRole = new WidgetRole({
    name: 'slider',
    description: 'An input where the user selects a value from within a given range.',
    superclassRoles: ['input', 'range'],
    requiredAttributes: ['aria-valuenow'],
    supportedAttributes: [
        'aria-errormessage',
        'aria-haspopup',
        'aria-invalid',
        'aria-orientation',
        'aria-readonly',
        'aria-valuemax',
        'aria-valuemin',
    ],
    accessibleName: ['author'],
    nameRequired: true,
    presentationalChildren: true,
    implicitValues: [
        {
            attribute: 'aria-orientation',
            value: 'horizontal',
        },
        {
            attribute: 'aria-valuemin',
            value: '0',
        },
        {
            attribute: 'aria-valuemax',
            value: '100',
        },
    ],
});
export default sliderRole;
