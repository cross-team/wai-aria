import WidgetRole from '../widgetRole';
const radiogroupRole = new WidgetRole({
    name: 'radiogroup',
    description: 'A group of radio buttons.',
    superclassRoles: ['select'],
    relatedConcepts: ['list'],
    requiredOwnedElements: ['radio'],
    supportedAttributes: [
        'aria-errormessage',
        'aria-invalid',
        'aria-readonly',
        'aria-required',
    ],
    accessibleName: ['author'],
    nameRequired: true,
});
export default radiogroupRole;
