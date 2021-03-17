import LiveRegionRole from '../liveRole';
const alertRole = new LiveRegionRole({
    name: 'alert',
    description: 'A type of live region with important, and usually time-sensitive, information.',
    superclassRoles: ['section'],
    subclassRoles: ['alertdialog'],
    accessibleName: ['author'],
    implicitValues: [
        {
            attribute: 'aria-live',
            value: 'assertive',
        },
        {
            attribute: 'aria-atomic',
            value: 'true',
        },
    ],
});
export default alertRole;
