import WidgetRole from '../widgetRole';
const radioRole = new WidgetRole({
    name: 'radio',
    description: 'A checkable input in a group of elements with the same role, only one of which can be checked at a time.',
    superclassRoles: ['input'],
    relatedConcepts: [
        {
            subject: '<input[type="radio"]>',
            specification: 'HTML',
        },
    ],
    requiredAttributes: ['aria-checked'],
    supportedAttributes: ['aria-posinset', 'aria-setsize'],
    accessibleName: ['contents', 'author'],
    nameRequired: true,
    presentationalChildren: true,
});
export default radioRole;
