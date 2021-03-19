import {
  Role,
  RoleCategory,
  RoleName,
  Attribute,
  AttributeValue,
  AccessibleNameFrom,
  Concept,
} from '../types'

export default class BaseRole {
  readonly name: RoleName
  readonly description: string
  readonly category: RoleCategory
  readonly abstract: boolean
  readonly accessibleName: Array<AccessibleNameFrom> | 'prohibited'
  readonly superclassRoles: Array<Role>
  readonly subclassRoles?: Array<RoleName>
  readonly inheritedAttributes: Array<Attribute>
  readonly requiredAttributes?: Array<Attribute>
  readonly supportedAttributes?: Array<Attribute>
  readonly prohibitedAttributes?: Array<Attribute>
  readonly requiredOwnedElements?: Array<RoleName | Array<RoleName>>
  readonly requiredContextRoles?: Array<RoleName>
  readonly nameRequired?: boolean
  readonly presentationalChildren?: boolean
  readonly deprecated?: boolean
  readonly implicitValues?: Array<AttributeValue>
  readonly relatedConcepts?: Array<Concept>
  readonly baseConcepts?: Array<Concept>

  constructor(
    name: RoleName,
    description: string,
    category: RoleCategory,
    superclassRoles: Array<Role>,
    accessibleName: Array<AccessibleNameFrom> | 'prohibited',
    subclassRoles?: Array<RoleName>,
    requiredAttributes?: Array<Attribute>,
    supportedAttributes?: Array<Attribute>,
    prohibitedAttributes?: Array<Attribute>,
    requiredOwnedElements?: Array<RoleName | Array<RoleName>>,
    requiredContextRoles?: Array<RoleName>,
    nameRequired?: boolean,
    presentationalChildren?: boolean,
    deprecated?: boolean,
    implicitValues?: Array<AttributeValue>,
    relatedConcepts?: Array<Concept>,
    baseConcepts?: Array<Concept>
  ) {
    this.name = name
    this.description = description
    this.category = category

    if (category === 'abstract') {
      this.abstract = true
    } else {
      this.abstract = false
    }

    this.superclassRoles = superclassRoles
    this.subclassRoles = subclassRoles
    this.inheritedAttributes = getInheritedAttributes(superclassRoles)
    this.requiredAttributes = requiredAttributes
    this.supportedAttributes = supportedAttributes
    this.prohibitedAttributes = prohibitedAttributes
    this.requiredOwnedElements = requiredOwnedElements
    this.requiredContextRoles = requiredContextRoles
    this.accessibleName = accessibleName

    if (nameRequired === true) {
      this.nameRequired = true
    } else {
      this.nameRequired = false
    }

    if (presentationalChildren === true) {
      this.presentationalChildren = true
    } else {
      this.presentationalChildren = false
    }

    if (deprecated === true) {
      this.deprecated = true
    } else {
      this.deprecated = false
    }

    this.implicitValues = implicitValues
    this.relatedConcepts = relatedConcepts
    this.baseConcepts = baseConcepts
  }
}

function getInheritedAttributes(superclasses: Array<Role>): Array<Attribute> {
  if (superclasses === []) {
    return []
  }
  let inherited: Array<Attribute> = []
  superclasses.forEach((superclass) => {
    if (superclass.supportedAttributes) {
      superclass.supportedAttributes.forEach((attribute) => {
        if (inherited.indexOf(attribute) === -1) {
          inherited.push(attribute)
        }
      })
    }
    superclass.inheritedAttributes.forEach((attribute) => {
      if (inherited.indexOf(attribute) === -1) {
        inherited.push(attribute)
      }
    })
  })
  return inherited
}
