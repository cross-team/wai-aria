import WidgetRole from '../widgetRole';
const tabpanelRole = new WidgetRole({
    name: 'tabpanel',
    description: 'A container for the resources associated with a tab, where each tab is contained in a tablist.',
    superclassRoles: ['section'],
    accessibleName: ['author'],
    nameRequired: true,
});
export default tabpanelRole;
