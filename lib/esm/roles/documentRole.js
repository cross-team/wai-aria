import BaseRole from './baseRole';
export default class DocumentStructureRole extends BaseRole {
    constructor(role) {
        super(role.name, role.description, 'document structure', role.superclassRoles, role.accessibleName, role.subclassRoles, role.requiredAttributes, role.supportedAttributes, role.prohibitedAttributes, role.requiredOwnedElements, role.requiredContextRoles, role.nameRequired, role.presentationalChildren, role.deprecated, role.implicitValues, role.relatedConcepts, role.baseConcepts);
    }
}
