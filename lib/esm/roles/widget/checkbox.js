import WidgetRole from '../widgetRole';
const checkboxRole = new WidgetRole({
    name: 'checkbox',
    description: 'A checkable input that has three possible values: true, false, or mixed.',
    superclassRoles: ['input'],
    subclassRoles: ['switch'],
    relatedConcepts: [
        {
            subject: '<input[type="checkbox"]>',
            specification: 'HTML',
        },
        'option',
    ],
    requiredAttributes: ['aria-checked'],
    supportedAttributes: [
        'aria-errormessage',
        'aria-expanded',
        'aria-invalid',
        'aria-readonly',
        'aria-required',
    ],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
    presentationalChildren: true,
});
export default checkboxRole;
