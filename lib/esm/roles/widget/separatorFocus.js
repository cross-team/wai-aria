import DocumentStructureRole from '../documentRole';
const separatorFocusRole = new DocumentStructureRole({
    name: 'separator',
    description: 'A divider that separates and distinguishes sections of content or groups of menuitems.',
    superclassRoles: ['widget'],
    relatedConcepts: [
        {
            subject: '<hr>',
            specification: 'HTML',
        },
    ],
    requiredAttributes: ['aria-valuenow'],
    supportedAttributes: [
        'aria-orientation',
        'aria-disabled',
        'aria-valuemax',
        'aria-valuemin',
        'aria-valuetext',
    ],
    accessibleName: ['author'],
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
export default separatorFocusRole;
