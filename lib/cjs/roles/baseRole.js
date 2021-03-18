"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("../utils/helpers");
class BaseRole {
    constructor(name, description, category, superclassRoles, accessibleName, subclassRoles, requiredAttributes, supportedAttributes, prohibitedAttributes, requiredOwnedElements, requiredContextRoles, nameRequired, presentationalChildren, deprecated, implicitValues, relatedConcepts, baseConcepts) {
        this.name = name;
        this.description = description;
        this.category = category;
        if (category === 'abstract') {
            this.abstract = true;
        }
        else {
            this.abstract = false;
        }
        this.superclassRoles = superclassRoles;
        this.subclassRoles = subclassRoles;
        this.inheritedAttributes = getInheritedAttributes(superclassRoles);
        this.requiredAttributes = requiredAttributes;
        this.supportedAttributes = supportedAttributes;
        this.prohibitedAttributes = prohibitedAttributes;
        this.requiredOwnedElements = requiredOwnedElements;
        this.requiredContextRoles = requiredContextRoles;
        this.accessibleName = accessibleName;
        if (nameRequired === true) {
            this.nameRequired = true;
        }
        else {
            this.nameRequired = false;
        }
        if (presentationalChildren === true) {
            this.presentationalChildren = true;
        }
        else {
            this.presentationalChildren = false;
        }
        if (deprecated === true) {
            this.deprecated = true;
        }
        else {
            this.deprecated = false;
        }
        this.implicitValues = implicitValues;
        this.relatedConcepts = relatedConcepts;
        this.baseConcepts = baseConcepts;
    }
}
exports.default = BaseRole;
// TO DO: getInheritedAttributes function definition
function getInheritedAttributes(superclasses) {
    if (superclasses === []) {
        return [];
    }
    let inherited = [];
    superclasses.forEach((superclass) => {
        let superRole = helpers_1.getRole(superclass);
        console.log('THIS IS SUPER ROLE', superRole);
        if (!Array.isArray(superRole)) {
            let newAttributes = superRole.inheritedAttributes;
            newAttributes.forEach((attribute) => {
                if (inherited.indexOf(attribute) === -1) {
                    inherited.push(attribute);
                }
            });
        }
    });
    return inherited;
}
