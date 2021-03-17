import { RoleCategory, RoleName, Attribute, AttributeValue, AccessibleNameFrom, Concept } from '../types';
export default class BaseRole {
    readonly name: RoleName;
    readonly description: string;
    readonly category: RoleCategory;
    readonly abstract: boolean;
    readonly accessibleName: Array<AccessibleNameFrom> | 'prohibited';
    readonly superclassRoles: Array<RoleName>;
    readonly subclassRoles?: Array<RoleName>;
    readonly inheritedAttributes: Array<Attribute>;
    readonly requiredAttributes?: Array<Attribute>;
    readonly supportedAttributes?: Array<Attribute>;
    readonly prohibitedAttributes?: Array<Attribute>;
    readonly requiredOwnedElements?: Array<RoleName | Array<RoleName>>;
    readonly requiredContextRoles?: Array<RoleName>;
    readonly nameRequired?: boolean;
    readonly presentationalChildren?: boolean;
    readonly deprecated?: boolean;
    readonly implicitValues?: Array<AttributeValue>;
    readonly relatedConcepts?: Array<Concept>;
    readonly baseConcepts?: Array<Concept>;
    constructor(name: RoleName, description: string, category: RoleCategory, superclassRoles: Array<RoleName>, accessibleName: Array<AccessibleNameFrom> | 'prohibited', subclassRoles?: Array<RoleName>, requiredAttributes?: Array<Attribute>, supportedAttributes?: Array<Attribute>, prohibitedAttributes?: Array<Attribute>, requiredOwnedElements?: Array<RoleName | Array<RoleName>>, requiredContextRoles?: Array<RoleName>, nameRequired?: boolean, presentationalChildren?: boolean, deprecated?: boolean, implicitValues?: Array<AttributeValue>, relatedConcepts?: Array<Concept>, baseConcepts?: Array<Concept>);
}
