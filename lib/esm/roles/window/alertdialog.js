import WindowRole from '../windowRole';
const alertdialogRole = new WindowRole({
    name: 'alertdialog',
    description: 'A type of dialog that contains an alert message, where initial focus goes to an element within the dialog.',
    superclassRoles: ['alert', 'dialog'],
    accessibleName: ['author'],
    nameRequired: true,
});
export default alertdialogRole;
