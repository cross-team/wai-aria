import WidgetRole from '../widgetRole';
const progressbarRole = new WidgetRole({
    name: 'progressbar',
    description: 'An element that displays the progress status for tasks that take a long time.',
    superclassRoles: ['range', 'widget'],
    relatedConcepts: ['status'],
    accessibleName: ['author'],
    presentationalChildren: true,
    nameRequired: true,
    implicitValues: [
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
export default progressbarRole;
